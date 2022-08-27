# 接入第三方皮肤站

::: tip 提示
在接入第三方皮肤站时，请检查您使用的皮肤站是否支持 **`Authlib` `Yggdrasil`** 登入  
本文使用 **`Plain Craft Launcher 2`** 演示  
演示皮肤站：[LittleSkin](https://littleskin.cn/)
:::

## 皮肤站注册

这里使用 [**LittleSkin**](https://littleskin.cn/) 皮肤站作为演示

- 注册账号

![注册账号](https://s2.loli.net/2022/08/27/7P5Gc3YKJsIp6Uf.png)

- 填入 **`电子邮箱` `密码` `昵称`** 点击 **`注册`**

![注册](https://s2.loli.net/2022/08/27/yrmYkxXAe8UN7hi.png)

- 登录皮肤站

## 创建角色

- 创建角色

![创建角色](https://s2.loli.net/2022/08/27/feSO7KzkYauFsC3.png)

![创建角色](https://s2.loli.net/2022/08/27/QfDziVPORdZM4Xe.png)

- 输入角色名（游戏ID） 点击确定
![输入角色名](https://s2.loli.net/2022/08/27/jnQrAwvzyWxfiu4.png)

## 添加皮肤

- 点击`皮肤库`

![皮肤库](https://s2.loli.net/2022/08/27/v6c8EIBHO5Kfgki.png)

- 选择自己喜欢的皮肤

- 点击 `添加至衣柜`

![添加至衣柜](https://s2.loli.net/2022/08/27/TyNjDbkzXswPMYU.png)

## 设置皮肤

- 在网站顶部点击 `我的衣柜`

![我的衣柜](https://s2.loli.net/2022/08/27/Jdp8ujkG23yTsNV.png)

- 点击自己的皮肤 右边会出现皮肤预览

![皮肤预览](https://s2.loli.net/2022/08/27/rRUovTdOZSDVQJc.png)

- 点击`使用`

![使用](https://s2.loli.net/2022/08/27/RLscBFIYzjw6Xq5.png)

- 选择自己的角色

![选择自己的角色](https://s2.loli.net/2022/08/27/thAwlVWLKjIcE3S.png)

## 启动器接入（新）

::: tip 提示
PCL 启动器目前已支持通过 拖拽按钮 实现Authlib登录
将按钮拖动至启动器的任意界面即可快速添加认证服务器
:::

- 将此按钮拖入 PCL2 启动器

![按钮拖入](https://s2.loli.net/2022/08/27/MPwekrSb9cVY6Hs.png)

![按钮拖入](https://s2.loli.net/2022/08/27/45iFdeSCVNILRl1.png)

- 点击**确定**

![确定](https://s2.loli.net/2022/08/27/L4sXwBrqkxG2J5i.png)

- 添加成功

![添加成功](https://s2.loli.net/2022/08/27/B4gimuztIEak8wQ.png)

## 启动器接入（旧）

- 打开PCL2启动器

- 选择好版本后 点击`版本设置`

![版本设置](https://s2.loli.net/2022/08/27/mL9kuHGCtU4gycn.png)

- 在侧边栏点击`设置`

- 往下拉找到`服务器选项`

- 登录方式选择 `第三方登录: Authlib-injector`

- 认证服务器输入：`https://littleskin.cn/api/yggdrasil`  
注册连接输入: `https://littleskin.cn/auth/register`

- 返回启动游戏

![启动游戏](https://s2.loli.net/2022/08/27/oCILT2RK5YmaUsy.png)
