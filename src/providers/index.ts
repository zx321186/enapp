import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Index provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Index {
  data: any = null;
  constructor(public http: Http) {
    console.log('Hello Index Provider');
  }

  //搜索页
  load(page,back){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=goods&op=goods_list&keyword=&page=10&curpage='+page+'&gc_id=&key='+back.str2+'&order='+back.str1+'')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data.datas.goods_list);
        }, err => {
          reject(err);
        })
    });
  }

  //主页内容
  indexContent(){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=index&op=index')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //主页导航
  indexNav(){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=index&op=goods_class&type=left')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //主页banner
  indexBanner(){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=index&op=temp')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //二级页banner
  listBanner(id){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=index&op=temp&type=left&pid='+id+'')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //二级页内容
  listContent(id){
    return new Promise((resolve, reject) => {
      this.http.get('mobile/index.php?act=index&op=two&pid='+id+'')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //商品详情页
  productDetail(goods_id){
    var newKey = localStorage.setItem('login','123');
    var key = localStorage.getItem('login');
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=goods&op=goods_detail&goods_id='+goods_id+'&key='+key+'')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //商品详情页图片
  productDetailImg(goods_id){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=goods&op=goods_body&goods_id='+goods_id+'')
        .map(res => res.text())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //商品评论
  reviews(goods_id,type,page){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=goods&op=goods_evaluate&goods_id='+goods_id+'&type='+type+'&curpage='+page+'&page=10')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //商品二级分类
  classify(){
    return new Promise((resolve, reject) => {
      this.http.get('/mobile/index.php?act=goods_class')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  //商品三级分类
  classifyIn(item){
    console.log(item)
    if(item.gc_id){
      return new Promise((resolve, reject) => {
        this.http.get('/mobile/index.php?act=goods_class&op=get_child_all&gc_id='+item.gc_id+'')
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          })
      });
    }else{
      return new Promise((resolve, reject) => {
        this.http.get('/mobile/index.php?act=brand&op=recommend_list')
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          })
      });
    }
  }
}
