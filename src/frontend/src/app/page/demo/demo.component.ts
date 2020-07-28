import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {forEach} from '@angular/router/src/utils/collection';
import {first} from 'rxjs/operators';
import {NgxEchartsModule} from 'ngx-echarts';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  category: 'news' | 'webpage' | 'novel' = 'news';
  //url = 'http://text-mining.bigbrothers.info';
  feUrl = '';
  url = 'http://127.0.0.1:8080';
  data = {
    newsStatus: false,
    webpageStatus: false,
    novelStatus: false,
    newsTopic: {},
    webpageTopic: {},
    novelTopic: {},
    status: false,
  };
  infer = {
    loading: false,
    top: [],
    top1: '机降',
    top2: '机降',
    text: '5月18日上午，全市公安机关2019年处置大规模群体性事件实兵对抗演练集训班开训仪式在警官培训中心成功举办。市局党委委员、政治部主任朱青春出席仪式并讲话，市局党委委员李彦主持。\n' +
      '朱青春同志充分肯定了近年来全市巡特警工作取得的成绩，并就全力办好集训班提出三点要求: 一是要提高政治站位，严抓作风纪律。要提高政治站位，充分认识参加此次集训的重要意义，克服困难抓好集训工作，培训期问要严格遵守市局各项纪律制度。二是要树立娄警形象，彰显铁军风采。要发扬特警五特精神，强化战斗素养，提升实战能力，圆满完成集训任务，力争在省厅演练中为娄底公安争光添彩。三是要加强实战演练，促进战训结合。要理清思路、提振精神，以“真刀真枪”上阵的态度投入到集训中去，以练代战、以练促战达到战训结合的目的。',
    click: () => {
      this.infer.loading = true;
      this.api.getTopic(this.infer.text).subscribe(
        data => {
          const top = this.getTop(data);
          this.infer.top = top;
          const d = this.getTopTopic(top);
          const option = this.copy(this.infer.option);
          option.xAxis[0].data = d.map(x => x[0]);
          option.series[0].data = d.map(x => x[1]);
          this.infer.top1 = option.xAxis[0].data[0];
          this.infer.top2 = option.xAxis[0].data[1];
          this.infer.option = option;

          // first Topic
          const f = this.getTop(this.data[`${this.category}Topic`]['' + top[0][0]]);
          const optionPieF = this.copy(this.infer.optionPie);
          optionPieF.series[0].data = f.map(x => {
            return {value: x[1], name: x[0]};
          });
          this.infer.optionPieFirst = optionPieF;
          const optionWordF = this.copy(this.infer.optionWord);
          optionWordF.series[0].textStyle.normal.color = () => {
            // Random color
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          };
          optionWordF.series[0].data = f.map(x => {
            return {value: x[1], name: x[0]};
          });

          this.infer.optionWordFirst = optionWordF;

          // Second Topic
          const s = this.getTop(this.data[`${this.category}Topic`]['' + top[1][0]]);
          const optionPieS = this.copy(this.infer.optionPie);

          optionPieS.series[0].data = s.map(x => {
            return {value: x[1], name: x[0]};
          });

          this.infer.optionPieSecond = optionPieS;
          const optionWordS = this.copy(this.infer.optionWord);
          optionWordS.series[0].textStyle.normal.color = () => {
            // Random color
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          };
          optionWordS.series[0].data = s.map(x => {
            return {value: x[1], name: x[0]};
          });
          this.infer.optionWordSecond = optionWordS;
          this.infer.loading = false;
        },
        err => {
          this.message.error('文档语义分析获取失败');
          this.infer.loading = true;
        }
      );
    },
    test: (p) => {
      this.infer.top1 = this.infer.option.xAxis[0].data[p.dataIndex];
      const f = this.getTop(this.data[`${this.category}Topic`]['' + this.infer.top[p.dataIndex][0]]);
      const optionPieF = this.copy(this.infer.optionPie);
      optionPieF.series[0].data = f.map(x => {
        return {value: x[1], name: x[0]};
      });
      this.infer.optionPieFirst = optionPieF;
    },
    option: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['机降', '复习', '工作', '训练', '公安', '着力点', '担当', '会上', '应急', '形象'],
          axisLabel: {
            interval: 0,
          },
          axisTick: {
            alignWithLabel: true,
            interval: 0,
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '主题概率',
          nameLocation: 'center',
          nameGap: '30',
        }
      ],
      series: [
        {
          name: '相关性',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}],
                global: false
              },
            },
          },
          data: [0.08900343642611684, 0.05257731958762887, 0.04845360824742268, 0.03539518900343643, 0.03367697594501719, 0.03230240549828179, 0.031615120274914095, 0.027835051546391754, 0.02646048109965636, 0.025773195876288662]

        }
      ]
    },
    optionPieFirst: {},
    optionPieSecond: {},
    optionPie: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      color: ['#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF'],
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['25%', '50%'],
          avoidLabelOverlap: false,
          label: {
            formatter: '{b}\n{d}%',
            color: '#000'
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{value: 0.8953802585601807, name: '机降'}, {value: 0.8856164813041687, name: '侦察兵'}, {
            value: 0.8677123188972473,
            name: '作战'
          }, {value: 0.8607262969017029, name: '实弹射击'}, {value: 0.8557944893836975, name: '研练'}, {
            value: 0.8528088927268982,
            name: '空降兵'
          }, {value: 0.85112065076828, name: '课目'}, {value: 0.8496363759040833, name: '合成营'}, {
            value: 0.8484421968460083,
            name: '演兵场'
          }, {value: 0.847089946269989, name: '破袭'}]
        }
      ]
    },
    optionWord: {
      series: [{
        type: 'wordCloud',
        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
        shape: 'circle',
        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        // maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '100%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [0, 0],
        // rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: {},
          },
          emphasis: {
            shadowBlur: 1,
            shadowColor: '#333'
          }
        },

        // Data is an array. Each array item must have name and value property.
        data: [{value: 0.8953802585601807, name: '机降'}, {value: 0.8856164813041687, name: '侦察兵'}, {
          value: 0.8677123188972473,
          name: '作战'
        }, {value: 0.8607262969017029, name: '实弹射击'}, {value: 0.8557944893836975, name: '研练'}, {
          value: 0.8528088927268982,
          name: '空降兵'
        }, {value: 0.85112065076828, name: '课目'}, {value: 0.8496363759040833, name: '合成营'}, {
          value: 0.8484421968460083,
          name: '演兵场'
        }, {value: 0.847089946269989, name: '破袭'}]
      }]
    },
    optionWordFirst: {},
    optionWordSecond: {},
  };
  keyWord = {
    loading: false,

    text: '美国联合航空（United Airlines）周日一班由芝加哥飞往肯塔基州最大城市路易斯维尔、编号UA3411的国内航班，因超额订票而将一名不愿意下机的华裔乘客强行拖走。有乘客拍下片段并上载至互联网，航空公司亦因此遭网民闹爆。联合航空事后发表声明确认事件，表示为此深表歉意。 从当时的片段及照片可见，该名亚裔汉被至少两名警员拖离坐位时，曾一度发出惨叫，头部更疑似撞到隔邻坐位，被拖走时衣衫不整且眼睛亦滑落，额头及口部有血，更有乘客指他被打晕；亦有乘客为男子抱不平，说：我的天啊！看看你们做了什么！”。被拖走的男子在约10分钟后挣脱，并返回到机上，喃喃自语说：“我要回家，我要回家”、“杀死我吧！”。有乘客指他当时满面鲜血，并似乎变得迷迷糊糊，单最终仍然被带走，而涉事航班则因事件而延迟约3小时起飞。 对此，人民日报官微于11日晚发表评论指出，从视频中老人惨叫和满脸血痕，足以坐实安保人员的野蛮；美联航的事后回应，则充满傲慢和冷血。本该以人为本的航空公司，却如此践踏乘客权益谁还敢乘坐这样的航班？如今美联航沦为众矢之的，股价大跌，咎由自取。任何无底线的企业，都应遭受市场惩罚。',
    data: [],
    optionWord: {},
    click: () => {
      this.keyWord.loading = true;
      const word = this.copy(this.infer.optionWord);
      word.series[0].textStyle.normal.color = () => {
        const l = ['#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF', '#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF'];
        return l[(Math.random() * l.length) | 0];
      };
      this.api.getKeyWord(this.keyWord.text).subscribe(
        data => {
          this.keyWord.data = (this.getTop(data)).map(item => {
            return {value: item[1].toFixed(4), name: item[0] + ' ' + item[1].toFixed(4)};
          });
          console.log(this.keyWord.data);
          word.series[0].data = this.keyWord.data;
          this.keyWord.optionWord = word;
          this.keyWord.loading = false;
        },
        err => {
          console.log(err);
          this.message.error('关键词抽取失败');
          this.keyWord.loading = false;
        }
      );
    }
  };
  sl = {
    loading: false,

    sText: '自动驾驶车',
    lText: '“时间表是2050年至2070年左右，所有的车都将是自动驾驶的车。”在昨日举行的中国（杭州）只能网联汽车前沿技术论坛暨中国（杭州）只能网联汽车产业促销大会上，中国工程院院士、中国智能学会理事长李德毅如此说道。 这样的预言并非毫无依据，随着人工智能、大数据、物联网、5G通讯技术等新一代信息技术与汽车制造、交通设施等领域的深度融合发展，近几年，只能网联汽车发展异军突起，自动驾驶已经成人工智能领域的“主战场”。尤其是5G通信技术的发展，将对加速智能网联汽车的应用、推动智能网联汽车产业化起到关键支撑作用。',
    point: 0,
    option: {},
    click: () => {
      this.sl.loading = true;
      let status = false;
      this.api.getQueryDoc(this.sl.sText, this.sl.lText).subscribe(
        data => {
          this.sl.point = data['TWE Similarity'];
          this.sl.loading = !(status);
          status = true;
        },
        err => {
          this.sl.loading = !(status);
          status = true;
          this.message.error('短文本长文本语义匹配-匹配得分失败');
        }
      );
      this.api.getTopic(this.sl.lText).subscribe(
        data => {
          const top = this.getTop(data);
          const d = this.getTopTopic(top);
          const option = this.copy(this.infer.option);
          option.xAxis[0].data = d.map(x => x[0]);
          option.series[0].data = d.map(x => x[1]);
          this.sl.option = option;
          this.sl.loading = !(status);
          status = true;
        },
        err => {
          this.sl.loading = !(status);
          status = true;
          this.message.error('短文本长文本语义匹配-文档语义失败');
        }
      );
    }
  };
  ll: any = {
    loading: false,

    text1: '“时间表是2050年至2070年左右，所有的车都将是自动驾驶的车。”在昨日举行的中国（杭州）只能网联汽车前沿技术论坛暨中国（杭州）只能网联汽车产业促销大会上，中国工程院院士、中国智能学会理事长李德毅如此说道。 这样的预言并非毫无依据，随着人工智能、大数据、物联网、5G通讯技术等新一代信息技术与汽车制造、交通设施等领域的深度融合发展，近几年，只能网联汽车发展异军突起，自动驾驶已经成人工智能领域的“主战场”。尤其是5G通信技术的发展，将对加速智能网联汽车的应用、推动智能网联汽车产业化起到关键支撑作用。',
    text2: '美国联合航空（United Airlines）周日一班由芝加哥飞往肯塔基州最大城市路易斯维尔、编号UA3411的国内航班，因超额订票而将一名不愿意下机的华裔乘客强行拖走。有乘客拍下片段并上载至互联网，航空公司亦因此遭网民闹爆。联合航空事后发表声明确认事件，表示为此深表歉意。 从当时的片段及照片可见，该名亚裔汉被至少两名警员拖离坐位时，曾一度发出惨叫，头部更疑似撞到隔邻坐位，被拖走时衣衫不整且眼睛亦滑落，额头及口部有血，更有乘客指他被打晕；亦有乘客为男子抱不平，说：我的天啊！看看你们做了什么！”。被拖走的男子在约10分钟后挣脱，并返回到机上，喃喃自语说：“我要回家，我要回家”、“杀死我吧！”。有乘客指他当时满面鲜血，并似乎变得迷迷糊糊，单最终仍然被带走，而涉事航班则因事件而延迟约3小时起飞。 对此，人民日报官微于11日晚发表评论指出，从视频中老人惨叫和满脸血痕，足以坐实安保人员的野蛮；美联航的事后回应，则充满傲慢和冷血。本该以人为本的航空公司，却如此践踏乘客权益谁还敢乘坐这样的航班？如今美联航沦为众矢之的，股价大跌，咎由自取。任何无底线的企业，都应遭受市场惩罚。',
    point: 0,
    top1: '',
    top1List: [],
    top2List: [],
    top2: '',
    option1: {},
    option2: {},
    optionPie1: {},
    optionPie2: {},
    test1: (p) => {
      this.ll.top1 = this.ll.option1.xAxis[0].data[p.dataIndex];
      const f = this.getTop(this.data[`${this.category}Topic`]['' + this.ll.top1List[p.dataIndex][0]]);
      const optionPieF = this.copy(this.ll.optionPie1);
      optionPieF.series[0].data = f.map(x => {
        return {value: x[1], name: x[0]};
      });
      this.ll.optionPie1 = optionPieF;
    },
    test2: (p) => {
      this.ll.top2 = this.ll.option2.xAxis[0].data[p.dataIndex];
      const f = this.getTop(this.data[`${this.category}Topic`]['' + this.ll.top2List[p.dataIndex][0]]);
      const optionPieF = this.copy(this.ll.optionPie2);
      optionPieF.series[0].data = f.map(x => {
        return {value: x[1], name: x[0]};
      });
      this.ll.optionPie2 = optionPieF;
    },
    click: () => {
      let status = 0;
      this.ll.loading = true;
      this.api.getDocDistance(this.ll.text1, this.ll.text2).subscribe(
        data => {
          this.ll.point = 1 - data['Hellinger Distance'];
          status = status + 1;
          if (status === 7) {
            this.ll.loading = false;
          }
        },
        err => {
          this.ll.loading = false;
          this.message.error('长文本匹配-获取匹配度失败');
        }
      );
      this.api.getTopic(this.ll.text1).subscribe(
        data => {
          const top = this.getTop(data);
          this.ll.top1List = top;

          const d = this.getTopTopic(top);
          const option = this.copy(this.infer.option);
          option.xAxis[0].data = d.map(x => x[0]);
          option.series[0].data = d.map(x => x[1]);
          this.ll.option1 = option;
          const f = this.getTop(this.data[`${this.category}Topic`]['' + top[0][0]]);
          const optionPieF = this.copy(this.infer.optionPie);
          optionPieF.series[0].data = f.map(x => {
            return {value: x[1], name: x[0]};
          });
          this.ll.optionPie1 = optionPieF;

          this.ll.top1 = this.ll.option1.xAxis[0].data[0];

          status = status + 2;
          if (status === 7) {
            this.ll.loading = false;
          }
        },
        err => {
          this.ll.loading = false;
          this.message.error('长文本匹配-文本1获取失败');
        }
      );
      this.api.getTopic(this.ll.text2).subscribe(
        data => {
          const top = this.getTop(data);
          this.ll.top2List = top;

          const d = this.getTopTopic(top);
          const option = this.copy(this.infer.option);
          option.xAxis[0].data = d.map(x => x[0]);
          option.series[0].data = d.map(x => x[1]);
          this.ll.option2 = option;
          const f = this.getTop(this.data[`${this.category}Topic`]['' + top[0][0]]);
          const optionPieF = this.copy(this.infer.optionPie);
          optionPieF.series[0].data = f.map(x => {
            return {value: x[1], name: x[0]};
          });
          this.ll.optionPie2 = optionPieF;
          this.ll.top2 = this.ll.option2.xAxis[0].data[0];

          status = status + 4;
          if (status === 7) {
            this.ll.loading = false;
          }
        },
        err => {
          this.ll.loading = false;
          this.message.error('长文本匹配-文本2获取失败');
        }
      );
    }
  };
  api = {
    getDocDistance: (t1, t2, category = this.category) => {
      const url = this.url + '/doc-distance';
      return this.http.post(
        url,
        (new HttpParams()
            .set('category', category)
            .set('type', 'str')
            .set('text1', t1)
            .set('text2', t2)
        ).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    },
    getQueryDoc: (s, l, category = this.category) => {
      const url = this.url + '/query-doc-sim';
      return this.http.post(
        url,
        (new HttpParams()
            .set('category', category)
            .set('type', 'str')
            .set('text1', s)
            .set('text2', l)
        ).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    },
    getKeyWord: (text, category = this.category) => {
      const url = this.url + '/doc-twe-keywords-plus';
      return this.http.post(
        url,
        (new HttpParams()
            .set('category', category)
            .set('type', 'str')
            .set('text', text)
        ).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    },
    getTopic: (text, category = this.category) => {
      const url = this.url + '/lda-infer';
      console.log(url);
      return this.http.post(
        url,
        (new HttpParams()
            .set('category', category)
            .set('type', 'str')
            .set('text', text)
        ).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    }
  };

  getTop(data, num = 10) {
    const list = [];
    for (const key in data) {
      list.push([key, data[key]]);
    }
    list.sort((f, s) => {
      return s[1] - f[1];
    });
    return list.slice(0, num);
  }

  getTopTopic(data, category = this.category, num = 10) {
    return data.map(item => {
      console.log('' + item[0]);
      const topicList = this.data[`${category}Topic`]['' + item[0]];
      return [this.getTop(topicList)[0][0], item[1]];
    });
  }

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) {
    this.http.get(
      this.feUrl + 'assets/topic-news-map.json',
    ).subscribe(
      data => {
        this.data.newsTopic = data;
        this.data.newsStatus = true;
        this.data.status = (this.data.newsStatus && this.data.novelStatus && this.data.webpageStatus);
      }
    );
    this.http.get(
      this.feUrl + 'assets/topic-novel-map.json',
    ).subscribe(
      data => {
        this.data.novelTopic = data;
        this.data.novelStatus = true;
        this.data.status = (this.data.newsStatus && this.data.novelStatus && this.data.webpageStatus);
      }
    );
    this.http.get(
      this.feUrl + 'assets/topic-webpage-map.json',
    ).subscribe(
      data => {
        this.data.webpageTopic = data;
        this.data.webpageStatus = true;
        this.data.status = (this.data.newsStatus && this.data.novelStatus && this.data.webpageStatus);
      }
    );
  }

  ngOnInit() {
    // @ts-ignore
    require('echarts-wordcloud');
    this.feUrl = window.location.pathname;
    this.infer.click();
    this.ll.click();
    this.keyWord.click();
    this.sl.click();
  }

  copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

}
