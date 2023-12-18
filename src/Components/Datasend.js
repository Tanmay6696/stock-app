import React, { useEffect, useState } from 'react'
import {db,auth} from  '../Firebase';
import {doc,query,docs,getDocs,collection,addDoc,deleteDoc, setDoc,getDoc} from 'firebase/firestore'
const Datasend = () => {
    const [name,setname]=useState();
    const [data,setdata]=useState([]);
    const [surname,setsurname]=useState();
    const [contact,setcontact]=useState();
    const [symbol,setsymbol]=useState();
    const [price,setprice]=useState();
    const [watchlist,setwatchlist]=useState([]);
    const watchlisdtcollection=collection(db,"watchlisttest");
    const UserId=auth.currentUser ? auth.currentUser.uid : null;
    //const test=getdb.collection('watchlisttest');

const userDocument =  getDocs(watchlisdtcollection);

// Now, you can use userDocument as the reference for your operations


   
const getdata = async () => {
    try {
        
        const data=doc(db,"watchlisttest",UserId);
        const datasecond =collection(data,'stocks');
        
        const datathord=await getDocs(datasecond);
        console.log("datasecond",datathord);
        const stocksData = datathord.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Set the data in your state or do whatever you need with it
        setdata(stocksData);
        

        
    } catch (err) {
        console.error(err);
    }
};
    
    const passdata =async()=>{
        try{
            alert("hi");
            const UserID=auth.currentUser ? auth.currentUser.uid : null;  
            const docref=doc(db,'watchlisttest',UserID); 
            
            const stocksinwatchlist=collection(docref,'stocks'); 
            const stockDocRef = doc(stocksinwatchlist, name);       
            
            await setDoc(stockDocRef,{
                buy:name,stockname:surname,stocksymbol:symbol
            });
           
            await getdata();
            
        }
        catch(err){
            console.error(err);
        }
    }
    const deletepassdata = async (id) => {
        try {
            const user = auth.currentUser;
            if (user) {
                // Use the userDocument reference to create the document reference
                const documentReference = doc(db,"watchlisttest",id);
    
                // Delete the document
                await deleteDoc(documentReference);
    
                // Refresh the data after deleting
                await getdata();
                
            }
        } catch (err) {
            console.error(err);
        }
    }
    
    useEffect(()=>{
        getdata();
        
        
    },[]);
    
  return (
    
    <div>
        <input placeholder='name' type='text' onChange={(e)=>{setname(e.target.value)}}/>
        <input placeholder='surname' type='text' onChange={(e)=>{setsurname(e.target.value)}}/>
        <input placeholder='symbol' type='text' onChange={(e)=>{setsymbol(e.target.value)}}/>
        <input placeholder='price' type='number' onChange={(e)=>{setprice(parseInt(e.target.value))}}/>
        <input placeholder='Contact' type='number' onChange={(e)=>{setcontact(parseInt(e.target.value))}}/>
        <button onClick={passdata}>submit</button>
        <div>
            {data?.map((watchlist)=>(
                <div key={watchlist.id}>
                    <span>{watchlist.stockname}</span> <br/>
                    <span>{watchlist.stocksymbol}</span> <br/>
                    <span>{watchlist.buy}</span><br/>
                    <span>{watchlist.stocksymbol}</span><br/>
                    <span>{watchlist.stockname}</span><br/>
                    <button onClick={()=>deletepassdata(watchlist.id)}>delete</button>
                </div>

            ))}
        </div>
        
    </div>
  )
}

export default Datasend