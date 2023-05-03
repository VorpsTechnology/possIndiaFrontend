import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './ParentCatogry.css'

function ParentCatogry() {
  return (
<>
<Navbar />
   <div className='container-fluid'>
    
    <div className='row'>
        <div className='col-2'>
            <Sidebar />
        </div>
        <div className='col-10'>
            <div className='container' id="container">
                <div>
                    <h4 className='productlabel'>Parent's Category</h4>
                    <hr />
                </div>
                <form action="">
                    <div>
                        <div className='formlabel'><label htmlFor="">Title</label></div>
                        <div><input className='inputbox' type="text" /></div>
                    </div>
                    <div>
                        <div className='formlabel'><label htmlFor="">Description</label></div>
                        <div><textarea className='texarea'  name=""  cols="120" rows="20"></textarea></div>
                    </div>
                    <div className='formlabel'>
                    
                    <form action="/action_page.php">
                    <input type="file" id="myFile" name="filename" />
                    
                    </form>
                    </div>
                    <div className='submitbtn'><button>Submit</button></div>

                </form>
            </div>
        </div>
    </div>
   </div>
</>
  )
}

export default ParentCatogry