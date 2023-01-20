const {IndexPage}=require('./IndexPage');
const {SignUpPage}=require('./SignUpPage');

class PoManager{
    
    constructor(page){
        this.page=page;
        this.indexpage=new IndexPage(this.page);
        this.signuppage=new SignUpPage(this.page);

    }
    getIndexpage(){
        return this.indexpage;
    }
    getSignuppage(){
        return this.signuppage;
    }

}
module.exports={PoManager};