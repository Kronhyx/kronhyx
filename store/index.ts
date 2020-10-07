interface IndexStore {
  nickname: string,
  name: string,
  avatar: string,
}

export const state = (): IndexStore => ({
  nickname: 'Kronhyx',
  name: 'Randy Tellez Galan',
  avatar: 'https://avatars0.githubusercontent.com/u/16559276?s=460&u=51fd2dbf319237d204efb1cf21b41b38057ecffd&v=4'
})

export const mutations = {
  nickname (state: IndexStore, value: string) {
    state.nickname = value
  }
}
