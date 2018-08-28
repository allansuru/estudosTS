 export class Comments {

    comentarios: any = [];
    postA: any = [];
    postB: any = [];

    constructor(comentarios: any) {
        this.comentarios = comentarios;
    }


  get filtraPostA() {
    this.comentarios.filter(itens => {
        if (itens.postId === 1) {
            this.postA = [...this.postA, itens];
        }
      });

      return this.postA;
    }

    get filtraPostB() {
        this.comentarios.filter(itens => {
            if (itens.postId === 2) {
                this.postB = [...this.postB, itens];
            }
          });
          return this.postB;
        }
 // tslint:disable-next-line:eofline
 }