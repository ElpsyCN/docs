---
sentences:
  - content: Hello, World!
    author: Brian Kernighan
    from: The C Programming Language
    tags:
      - computer
  - content: 错的不是我，是世界。
    author: 鲁路修·兰佩路基
    from: Code Geass 反叛的鲁路修
    tags:
      - animation
  - content: 我们一日日度过的所谓日常，实际上可能是接连不断的奇迹。
    from: 日常
    tags:
      - animation
      - comic
  - content: 是啊，我所爱的，即非群星，也非银河。
    author: 云游君
    from: yunyoujun.cn
    tags:
      - custom
  - content: 隐约雷鸣 阴霾天空 但盼风雨来 能留你在此
    from: 万叶集·雷神短歌
    tags:
      - poetry
  - content: 人类的悲欢并不相通，我只觉得他们吵闹。
    author: 鲁迅
    from: 小杂感
  - content: 遍身罗绮者，不是养蚕人。
    author: 张俞
    from: 蚕妇
    tags:
      - poetry
  - content: 今日は……风が騒がしいな…（今日的风儿甚是喧嚣……）
    author: 田畑秀则
    from: 男子高中生的日常
    tags:
      - animation
      - comic
  - content: 人类的赞歌是勇气的赞歌！人类的伟大是勇气的伟大！！
    author: 威廉·A·齐贝林
    from: JOJO 的奇妙冒险 幻影之血
    tags:
      - animation
      - comic
  - content: 人生就像蒲公英，看似自由，实则身不由己。
    tags:
      - philosophy
  - content: Never compromise.
    author: 罗夏
    from: 守望者
    tags:
      - comic
      - film
  - content: 大师，什么是快乐的秘诀？「不要和愚者争论。」大师，我完全不同意这就是秘诀。「是的，你是对的。」
    tags:
      - philosophy
  - content: 臣闻善作者，不必善成；善始者，不必善终。
    from: 史记·乐毅列传
  - content: Talk is cheap. Show me the code.
    from: https://lkml.org/lkml/2000/8/25/132
    author: Linus Torvalds
    tags:
      - Linux
  - content: 只要稍微打个招呼就会胡思乱想，要是互相发短信，心中还会起波澜，接到对方来电的那一整天，都会对着来电记录傻笑，可是我知道，那只是温柔，对我温柔的人对别人也同样温柔，这种事差点就忘记了，如果说真相是残酷的，谎言肯定是温柔的，所以温柔是谎言，一次又一次期待，一次又一次落空，不知从何时开始，便不再怀抱希望。
    from: 我的青春恋爱物语果然有问题
    author: 比企谷八幡
    tags:
      - young
---

# 句子

## 格式

```yml
sentences:
  - content: Hello, World!
    author: Brian Kernighan
    from: The C Programming Language
    tags:
      - computer
```

## 列表

<template v-for="sentence, key in $frontmatter.sentences">
  <h3 :id="'s-' + key">
    <a :href="'#s-' + key" class="header-anchor">#</a>
    {{ sentence.content }}
  </h3>
  <blockquote v-if="sentence.author || sentence.from || sentence.tags">
    <span v-if="sentence.author">-- {{ sentence.author }}</span>
    <span v-if="sentence.from">「{{ sentence.from }}」</span>
    <Badge v-for="tag, i in sentence.tags" vertical="middle" :type="type[i%3]" :text="tag"/>
  </blockquote>
</template>

<script>
  export default {
    data() {
      return {
        type: ["tip", "warning", "error"]
      }
    }
  }
</script>
