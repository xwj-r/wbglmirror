import { Component } from '@angular/core';
import { removeDomScope } from '@micro-zoe/micro-app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'micro-app-demo';

  microAppData: any = {title: '来自基座的数据',data:""}
  data: any = ''
  childdata = ''
  ifim: any = ""

  ngOnInit() {
    window.addEventListener('message',(e) => {
      console.log(e,3);
      this.childdata = JSON.stringify(e.data)
    })
    this.ifim = window.document.getElementById('unity3d');

  }

  handleCreate (): void {
    console.log('可视化配载 创建了')
  }

  handleBeforeMount (): void {
    console.log('可视化配载 即将被渲染')
  }

  handleMount (): void {
    console.log('可视化配载 已经渲染完成')
  }

  handleUnmount (): void {
    console.log('可视化配载 卸载了')
  }

  handleError (): void {
    console.log('可视化配载 加载出错了')
  }
 

  handleDataChange (e: any): void {
    this.childdata = JSON.stringify(e.detail.data)
    console.log('来自子应用 可视化配载 的数据:', e.detail.data)
  }

  send() {
    this.microAppData = {...this.microAppData,data :this.data}

    this.ifim.contentWindow.postMessage({data: this.data}
    ,'http://localhost:2100')
  }
  
}
