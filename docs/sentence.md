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
  - content: 人生就像蒲公英，看似自由，实则身不由己。
  - content: Never compromise.
    author: 罗夏
    from: 守望者
---

# 句子

<template v-for="sentence, key in $frontmatter.sentences">
  <h2 :id="'s-' + key">
    <a :href="'#s-' + key" class="header-anchor">#</a>
    {{ sentence.content }}
    <Badge v-for="tag, i in sentence.tags" :type="type[i%3]" :text="tag"/>
  </h2>
  <blockquote v-if="sentence.author || sentence.from">
    --
    <span v-if="sentence.author">{{ sentence.author }}</span>
    <span v-if="sentence.from">「{{ sentence.from }}」</span>
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
