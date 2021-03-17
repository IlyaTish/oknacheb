<template lang='pug'>
  .spinner
    .ripple__circle
    .ripple__circle.ripple__inner-circle
</template>

<style lang='stylus' scoped>
.spinner
  width 30px
  height 30px
  display inline-block
  margin: -15px 0 0 -15px
  top: 50%
  left: 50%
  position absolute
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNjQgMTI4QTY0IDY0IDAgMCAxIDE4LjM0IDE5LjE2TDIxLjE2IDIyYTYwIDYwIDAgMSAwIDUyLjgtMTcuMTdsLjYyLTMuOTVBNjQgNjQgMCAwIDEgNjQgMTI4eiIgZmlsbD0iIzhmOGY4ZiIvPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDY0IDY0IiB0bz0iMzYwIDY0IDY0IiBkdXI9IjE4MDBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+')
  background-position center center
  background-repeat no-repeat
  background-size 100%
</style>
