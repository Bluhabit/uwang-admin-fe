export const useAuth = defineStore<string,{
    tes:string
}>("auth", {
    state:()=>({
        tes:''
    }),
    actions:{
        async singIn(){
            //todo
        }
    }
})