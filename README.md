# TopXNotifyV2 Documentation
![TopXNotifyV2](https://cdn.discordapp.com/attachments/1045025595588874310/1173807302189523075/TopXNotify.png?ex=65654c3d&is=6552d73d&hm=5ed85f6adcb6b339ab009d4d6b3d4c46b7850f40d4e4f7b782b8d218f40f9977&)

### Thanks For Using Our Script ❤️


## Client Side Usage

```lua
exports['TopXNotifyV2']:TopXNotify(type, title, message, time, postion, sound)
exports.TopXNotifyV2:TopXNotify(type, title, message, time, postion, sound)
```

## Client Side Example

```lua
exports['TopXNotifyV2']:TopXNotify("success", "SAFE ZONE", "You Enterd The Save Zone", 5000, 'top-left', true)
exports.TopXNotifyV2:TopXNotify("success", "SAFE ZONE", "You Enterd The Save Zone", 5000, 'top-left', true)
```

## Server Side Usage

```lua
TriggerClientEvent("TopXNotifyV2:Notify", source, type, title, message, time, postion, sound)
```

## Server Side Example

```lua
TriggerClientEvent("TopXNotifyV2:Notify", source, "error", "SAFE ZONE", "You Exited The Save Zone", 5000, 'top-center', true)
```
### Types

- **<span style="color:rgba(71, 215, 100, 1)">success</span><br>**
![TopXNotifyV2](https://cdn.discordapp.com/attachments/1072749296321044521/1209226789138731028/image.png?ex=65e62734&is=65d3b234&hm=f76bddd7a63d3e4a6c6146ab044dd8aa54abc5f28248e0a642a69f0ec516f344&)
- **<span style="color:rgba(255, 53, 91, 1)">error</span><br>**
![TopXNotifyV2](https://cdn.discordapp.com/attachments/1072749296321044521/1209226931107659837/image.png?ex=65e62756&is=65d3b256&hm=8b7961238f74b84e4414f2ab241b3c1681918b6239ebc76874d3a7832cf9b79f&)
- **<span style="color:rgba(47, 134, 235, 1)">info</span><br>**
![TopXNotifyV2](https://cdn.discordapp.com/attachments/1072749296321044521/1209226888338350100/image.png?ex=65e6274c&is=65d3b24c&hm=40ced1e36c4ea1e35c42378c68d83e27da521f748e4bfccc15062cc3e3c6ad80&)
- **<span style="color:rgba(255, 192, 33, 1)">warning</span><br>**
![TopXNotifyV2](https://cdn.discordapp.com/attachments/1072749296321044521/1209226959083536435/image.png?ex=65e6275d&is=65d3b25d&hm=9ecb5a8c64a715ca0c8ac8430f96e6b321fb56060ce24c4fe5dd5073183d90d8&)


<hr>

### source

**Set `-1` To Send The Notification For All Players**



### Title 

**`Message Title`**

### Message 

**`Message You Want To Send`**

### Time (Milliseconds)

**`1 Second = 1000 Millisecond` (Default value = 5000)**

### postion

**- `top-left` (Default value)** <br>
**- `center-top`**<br>
**- `top-right`**<br>
**- `center-left`**<br>
**- `center-right`**<br>
**- `bottom-left`**<br>
**- `center-bottom`**<br>
**- `bottom-right`**<br>

### Sound (Boolean) 

- **Set Value `true` To Play Notification Sound**

- **Set Value `false` To Mute Notification Sound (Default value)**

```diff
- Make Sure The File Name Is TopXNotifyV2
```

### Discord Server invite
[![](https://dcbadge.vercel.app/api/server/vuJQnbEMyu)](https://discord.gg/vuJQnbEMyu)

### Donation
<a href="https://www.buymeacoffee.com/topxteam26" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy TopX A Coffee" height="50" width="174"></a>
