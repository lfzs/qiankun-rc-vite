1、setup

- cd main && pnpm install && pnpm dev
- cd micro-a && pnpm install && pnpm dev
- cd micro-b && pnpm install && pnpm dev

2、打开 http://localhost:7001/micro-a 激活了 micro-a 子应用
![image](https://github.com/lfzs/qiankun-rc-vite/assets/20108480/37bebf2f-690c-4e32-b602-b45f04d4296b)

3、点击菜单栏 go micro-b 按钮，激活了 micro-b 子应用
![image](https://github.com/lfzs/qiankun-rc-vite/assets/20108480/cc0b586c-2721-4fb7-843a-60b2f0e7a14b)

到这里都是没问题的

4、点击 go micro-a again 按钮，再次激活 micro-a 子应用，出现了错误
![image](https://github.com/lfzs/qiankun-rc-vite/assets/20108480/f196dd60-832a-465d-a07c-edba896defc4)


视频演示

https://github.com/lfzs/qiankun-rc-vite/assets/20108480/f0ac8010-6e50-4ec5-9532-bcee2b5277c2


