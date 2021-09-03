import React,{useState} from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt,faPlus } from '@fortawesome/free-solid-svg-icons'
import "../CSS/Pharmacy.css";

import { blue, red } from "@material-ui/core/colors";
import { Modal,Card ,Container} from "@material-ui/core"
export default function Owner({ pharmacy, cart, setCart }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
	return (
		<div className="pharmacy-container">
			<div className="container-left">
				{pharmacy &&
					pharmacy.items.map((medItem) => (
						<div >
                            <CartItem
							cart={cart}
							item={medItem}
							setCart={setCart}
                            
						/>
                    
                        
                        <div style={{paddingRight:'20px',display:'flex',justifyContent:'flex-end'}} >
                            <button onClick={handleOpen} style={{marginRight:'10px','backgroundColor':'#a0b4f0'}} className='custBtn'>
                            <FontAwesomeIcon color='white' size='1x' icon={faPencilAlt} />
                            </button>
                         -
                            
                            <button className='custBtn' style={{'backgroundColor':'#ff8886'}} >
                            <FontAwesomeIcon color='white' icon={faTrash} />
                            </button>
                        </div>
                        </div>
                        
                        
					))}
			</div>
			<div className="container-right">
				<div className="pharmacy-details-container">
					<span className="pharmacy-details-name">
						{pharmacy && pharmacy.placeName}
					</span>
					
					<span className="pharmacy-details-medicine">
						{pharmacy && pharmacy.placeAddress}
					</span>
				</div>
				<div className="goto-cart">
                   <button className='custBtn' type="button" onClick={handleOpen}>
                       <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                     <span style={{marginLeft:'10px'}}>Add New Item</span>
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                          <Container style={{display:'flex',justifyContent:'center'}}>
                                <Card style={{width:'50%',marginTop:'100px',padding:'10px 40px'}}>
                                <div >
                                        <h2 style={{alignItems:'center'}} id="simple-modal-title">Add New Item</h2>
                                        <hr></hr>
                                        <div id="simple-modal-description">
                                            <p>Add details of medicine </p>
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'10px'}}>
                                                <label for='Name'>Name :</label>
                                                <input class='formInput' name='Name'></input>
                                            </div>
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'10px'}}>
                                                <label for='Price'>Price :</label>
                                                <input class='formInput' name='price' placeholder='Rs'></input>
                                            </div>
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'10px'}}>
                                                <label for='qty'>Quantity :</label>
                                                <input class='formInput' name='qty' ></input>
                                            </div>
                                            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
                                                <button style={{backgroundColor:'#1261A0',color:"white",marginRight:'10px'}} className='custBtn'>
                                                    Save Item
                                                </button>
                                                <button onClick={handleClose} className='custBtn' style={{backgroundColor:'#ff6963',color:"white"}} >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                          </Container> 
                        
                    </Modal>

				</div>
			</div>
		</div>
	);
}
