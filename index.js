import { donorList } from "./donorlist.js";


donorList.map((item,i)=>{
    let OnlyDonorName=item['name'];
    let OnlyBloodGroup=item['BG'];

    let MyList= "Donor Name is:"+OnlyDonorName+" & Blood Group is "+ OnlyBloodGroup
    console.log(MyList);
})

