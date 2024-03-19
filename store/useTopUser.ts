
export const useTopUser = defineStore<string,{topUser:UserCredentialResponse,isLoading:boolean},{},{getTopUser:()=>Promise<void>}>('useTopUser',{
  state:() => ({
    topUser:[],
    isLoading: true,
  }),
  actions: {
    async getTopUser(){
      this.isLoading = true;
      const {get}= useApi()
      const data = await get<Array<UserCredentialResponse>>("uwang/dev/account/v1/admin/get-top-user")
      this.topUser = data.data
      this.isLoading = false
    }
  }
})