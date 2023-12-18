// import React, { useEffect, useState } from 'react'
// import {db,auth} from  '../Firebase';
// import {doc,query,docs,getDocs,collection,addDoc,deleteDoc, setDoc,getDoc} from 'firebase/firestore'

// const DatasendforbuyandSell = (props) => {
//     const Buystocksmodel =()=>{

//     }
//     const passdata =async()=>{
//         try{
//             alert("hi");
//             const UserID=auth.currentUser ? auth.currentUser.uid : null;  
//             const docref=doc(db,'stocks',UserID); 
            
//             const stocksinwatchlist=collection(docref,'stocks'); 
//             const stockDocRef = doc(stocksinwatchlist, name);       
            
//             await setDoc(stockDocRef,{
//                 buy:name,stockname:surname,stocksymbol:symbol
//             });
           
//             await getdata();
            
//         }
//         catch(err){
//             console.error(err);
//         }
//     }
//   return (
//     <div><div className="modal" tabindex="-1" role="dialog">
//     <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title">Modal title</h5>
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//           <p>Modal body text goes here.</p>
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-primary" onClick={props.Buystocksmodel}>Buy</button>
//           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         </div>
//       </div>
//     </div>
//   </div></div>
//   )
// }

// export default DatasendforbuyandSell