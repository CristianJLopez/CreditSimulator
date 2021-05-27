const app = new Vue({
    el: '#app',
    data:{
        valorCredito:null,
        numeroCuotas:null,
        tasaInteres:null,
        cuotas:[
           {}
       ],
       tiempo:[ ]
    },
    methods:{
        
        calcular(){
            //CAMBIAR FORMATO DE NUMERO A PESOS
            const formatterPeso = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
              })

              //TRAER DATA Y HACER OPERACIONES
            this.cuotas.unshift({numeroCuotas:this.numeroCuotas, cuotaMes: this.cuotaMes, cuotaInteres: this.interesMes, totalPagar: this.totalPagar})
            totalInteres= this.valorCredito*this.tasaInteres*this.numeroCuotas/100
            cuotaMes= this.valorCredito/this.numeroCuotas 
            interesMes= totalInteres/this.numeroCuotas
            totalPagar= cuotaMes+interesMes
            totalDeuda= 
            numeroCuotas= this.numeroCuotas
            
            //ITERAR EN EL ARRAY TIEMPO PARA OBTENER NUMERO DE CUOTAS
            for(let i=1; i<=numeroCuotas; i++){
                let numct=this.tiempo.push(i)
                console.log(numct)
            }
            
            //USAR EL FORMATO PESO DONDE LO NECESITAMOS (VALORES A RENDERIZAR)
           cuotaMes= formatterPeso.format(cuotaMes)
           interesMes= formatterPeso.format(interesMes)
           totalPagar= formatterPeso.format(totalPagar)

          this.tiempo.reset
          
        },
        //RESETEAR VALORES FORMULARIO
        botonReset() {
            this.tiempo=[],
            this.valorCredito=null,
            this.numeroCuotas=null,
            this.tasaInteres=null
        }
}
})