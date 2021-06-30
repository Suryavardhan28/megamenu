import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Image from "next/image";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { GoogleFonts } from "next-google-fonts";

const useStyles = makeStyles((theme) => ({
  root:  {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize:"14px",
    fontWeight:"600",
    padding:"5vh 15px 3.8vh 15px",
    borderBottom:'3px solid transparent', 
    '&:hover': {
      cursor:"pointer",
      borderBottom:'3px solid #ee5f73',
     },
  },
  bar:{
    height:"80px",
    backgroundColor:"#FFFFFF",
    color:"#282C3F",
    fontFamily:'sans-serif',
    boxShadow: '0 4px 12px 0 rgb(0 0 0 / 5%)',
  },
  logo:{
    padding:"0 20px",
    '&:hover': {
      cursor:"pointer",
     },
  },
  search: {
    position: 'relative',
    borderRadius:"4px 4px 4px 4px" ,
    backgroundColor: "#f5f5f6",
    width:"450px",
    marginRight:'4vw',
    marginLeft:"5vw",
    },


    searchIcon: {
      color: "#D3D3D3",
      height: '100%',
      position: 'absolute',
      marginLeft:"5px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  focused: { 
    color: "black",
    border:"1px solid #D3D3D3",
    borderWidth: 2,
    },
    inputInput: {   
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      padding: theme.spacing(1, 1, 1, 0),
      width: '100%',
    },
    inputRoot: {
      width:"100%",
    },
    bt1:{
      display: 'block',
      fontSize:"13px",
      textAlign:"center", 
      padding:"2.9vh 0.5vw",
      borderBottom:'3px solid transparent', 
      '&:hover': {
        cursor:"pointer",
        borderBottom:'3px solid #ee5f73',
      }, 
  },
  bt2:{
    display: 'block',
    fontSize:"13px",
    padding:"2.9vh 0.5vw",
    textAlign:"center",
    borderBottom:'3px solid transparent', 
    '&:hover': {
        cursor:"pointer",
      }, 
  },
  header1:{
    color:"#ee5f73",
    fontWeight:"700",
    fontSize:"13px",
    padding:'10px 0',
    '&:hover':{
      cursor:'pointer',
    },
  },
  header2:{
    color:"#fb56c1",
    fontWeight:"700",
    fontSize:"13px",
    padding:'10px 0',
    '&:hover':{
      cursor:'pointer',
    },
  },
  header3:{
    color:"#f26a10",
    fontWeight:"700",
    fontSize:"13px",
    padding:'10px 0',
    '&:hover':{
      cursor:'pointer',
    },
  },
  header4:{
    color:"#f2c210",
    fontWeight:"700",
    fontSize:"13px",
    padding:'10px 0',
    '&:hover':{
      cursor:'pointer',
    },
  },
  header5:{
    color:"#0db7af",
    fontWeight:"700",
    fontSize:"13px",
    padding:'10px 0',
    '&:hover':{
      cursor:'pointer',
    },
  },
  border:{
    borderBottom: '1px solid #CECACC',
    paddingBottom:"10px !important",
  }
}));



export default function nav() {
  const classes = useStyles();



  return (
  <div className={classes.root}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&&display=swap" />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" />
      <AppBar position="static"  className={classes.bar}>
        <Toolbar style={{margin:"auto 10px"}}>
         <icon className={classes.logo}>
            <Image src="/myntra-logo.png" width={50} height={50} />
         </icon>
         <div className="navbar">
 
  <div className="dropdown">
    <button className="dropbtn1">MEN 
     
    </button>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
          <p className={classes.header1}>Topwear</p>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li className={classes.border}>Rain Jackets</li>
          <p className={classes.header1}>Indian & Festive Wear</p>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </div>
        <div className="column1">
        <p className={classes.header1}>Bottomwear</p>
        <li> Jeans</li>
        <li>Casual Trousers</li>
        <li>Formal Trousers</li>
        <li>Shorts</li>
        <li className={classes.border}>Track Pants & Joggers</li>
        <p className={classes.header1}>Innerwear & Sleepwear</p>
        <li> Briefs & Trunks</li>
        <li>Boxers</li>
        <li>Vests</li>
        <li>Sleepwear & Loungewear</li>
        <li className={classes.border}>Thermals</li>
        <p className={classes.header1}>Plus Size</p>
        </div>
        <div className="column">
        <p className={classes.header1}>Footwear</p>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
          <li className={classes.border}>Suits</li>
          <p className={classes.header1}>Personal Care & Grooming</p>
          <p className={classes.header1}> Sunglasses & Frames</p>
          <p className={classes.header1}>Watches</p>
        </div>
        <div className="column1">
        <p className={classes.header1}>Sports & Active Wear</p>
        <li>Sports Shoes</li>
        <li>Sports Sandals</li>
        <li>Active T-Shirts</li>
        <li>Track Pants & Shorts</li>
        <li>Tracksuits</li>
        <li>Jackets & Sweatshirts</li>
        <li>Sports Accessories</li>
        <li className={classes.border}>Swimwear</li>
        <p className={classes.header1}>Gadgets</p>
        <li>Smart Wearables</li>
        <li>Fitness Gadgets</li>
        <li>Headphones</li>
        <li>Speakers</li>
        </div>
        <div className="column">
        <p className={classes.header1}> Fashion Accessories</p>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li className={classes.border}>Helmets</li>
          <p className={classes.header1}>Bags & Backpacks</p>
          <p className={classes.header1}>Luggages & Trolleys</p>
        </div>
      </div>
    </div>
  </div> 
</div>
         <div className="navbar">
 
  <div className="dropdown">
    <button className="dropbtn2">WOMEN 
     
    </button>
    <div className="dropdown-content">  
      <div className="row">
      <div className="column">
          <p className={classes.header2}>Topwear</p>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li className={classes.border}>Rain Jackets</li>
          <p className={classes.header2}>Indian & Festive Wear</p>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </div>
        <div className="column1">
        <p className={classes.header2}>Bottomwear</p>
        <li> Jeans</li>
        <li>Casual Trousers</li>
        <li>Formal Trousers</li>
        <li>Shorts</li>
        <li className={classes.border}>Track Pants & Joggers</li>
        <p className={classes.header2}>Innerwear & Sleepwear</p>
        <li> Briefs & Trunks</li>
        <li>Boxers</li>
        <li>Vests</li>
        <li>Sleepwear & Loungewear</li>
        <li className={classes.border}>Thermals</li>
        <p className={classes.header2}>Plus Size</p>
        </div>
        <div className="column">
        <p className={classes.header2}>Footwear</p>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
          <li className={classes.border}>Suits</li>
          <p className={classes.header2}>Personal Care & Grooming</p>
          <p className={classes.header2}> Sunglasses & Frames</p>
          <p className={classes.header2}>Watches</p>
        </div>
        <div className="column1">
        <p className={classes.header2}>Sports & Active Wear</p>
        <li>Sports Shoes</li>
        <li>Sports Sandals</li>
        <li>Active T-Shirts</li>
        <li>Track Pants & Shorts</li>
        <li>Tracksuits</li>
        <li>Jackets & Sweatshirts</li>
        <li>Sports Accessories</li>
        <li className={classes.border}>Swimwear</li>
        <p className={classes.header2}>Gadgets</p>
        <li>Smart Wearables</li>
        <li>Fitness Gadgets</li>
        <li>Headphones</li>
        <li>Speakers</li>
        </div>
        <div className="column">
        <p className={classes.header2}> Fashion Accessories</p>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li className={classes.border}>Helmets</li>
          <p className={classes.header2}>Bags & Backpacks</p>
          <p className={classes.header2}>Luggages & Trolleys</p>
        </div>
      </div>
    </div>
  </div> 
</div>
         <div className="navbar">
 
  <div className="dropdown">
    <button className="dropbtn3">KIDS </button>
    <div className="dropdown-content">  
      <div className="row">
      <div className="column">
          <p className={classes.header3}>Topwear</p>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li className={classes.border}>Rain Jackets</li>
          <p className={classes.header3}>Indian & Festive Wear</p>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </div>
        <div className="column1">
        <p className={classes.header3}>Bottomwear</p>
        <li> Jeans</li>
        <li>Casual Trousers</li>
        <li>Formal Trousers</li>
        <li>Shorts</li>
        <li className={classes.border}>Track Pants & Joggers</li>
        <p className={classes.header3}>Innerwear & Sleepwear</p>
        <li> Briefs & Trunks</li>
        <li>Boxers</li>
        <li>Vests</li>
        <li>Sleepwear & Loungewear</li>
        <li className={classes.border}>Thermals</li>
        <p className={classes.header3}>Plus Size</p>
        </div>
        <div className="column">
        <p className={classes.header3}>Footwear</p>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
          <li className={classes.border}>Suits</li>
          <p className={classes.header3}>Personal Care & Grooming</p>
          <p className={classes.header3}> Sunglasses & Frames</p>
          <p className={classes.header3}>Watches</p>
        </div>
        <div className="column1">
        <p className={classes.header3}>Sports & Active Wear</p>
        <li>Sports Shoes</li>
        <li>Sports Sandals</li>
        <li>Active T-Shirts</li>
        <li>Track Pants & Shorts</li>
        <li>Tracksuits</li>
        <li>Jackets & Sweatshirts</li>
        <li>Sports Accessories</li>
        <li className={classes.border}>Swimwear</li>
        <p className={classes.header3}>Gadgets</p>
        <li>Smart Wearables</li>
        <li>Fitness Gadgets</li>
        <li>Headphones</li>
        <li>Speakers</li>
        </div>
        <div className="column">
        <p className={classes.header3}> Fashion Accessories</p>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li className={classes.border}>Helmets</li>
          <p className={classes.header3}>Bags & Backpacks</p>
          <p className={classes.header3}>Luggages & Trolleys</p>
        </div>
      </div>
    </div>
  </div> 
</div>
         <div className="navbar">
 
  <div className="dropdown">
    <button className="dropbtn4">HOME & LIVING 
     
    </button>
    <div className="dropdown-content">  
      <div className="row">
      <div className="column">
          <p className={classes.header4}>Topwear</p>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li className={classes.border}>Rain Jackets</li>
          <p className={classes.header4}>Indian & Festive Wear</p>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </div>
        <div className="column1">
        <p className={classes.header4}>Bottomwear</p>
        <li> Jeans</li>
        <li>Casual Trousers</li>
        <li>Formal Trousers</li>
        <li>Shorts</li>
        <li className={classes.border}>Track Pants & Joggers</li>
        <p className={classes.header4}>Innerwear & Sleepwear</p>
        <li> Briefs & Trunks</li>
        <li>Boxers</li>
        <li>Vests</li>
        <li>Sleepwear & Loungewear</li>
        <li className={classes.border}>Thermals</li>
        <p className={classes.header4}>Plus Size</p>
        </div>
        <div className="column">
        <p className={classes.header4}>Footwear</p>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
          <li className={classes.border}>Suits</li>
          <p className={classes.header4}>Personal Care & Grooming</p>
          <p className={classes.header4}> Sunglasses & Frames</p>
          <p className={classes.header4}>Watches</p>
        </div>
        <div className="column1">
        <p className={classes.header4}>Sports & Active Wear</p>
        <li>Sports Shoes</li>
        <li>Sports Sandals</li>
        <li>Active T-Shirts</li>
        <li>Track Pants & Shorts</li>
        <li>Tracksuits</li>
        <li>Jackets & Sweatshirts</li>
        <li>Sports Accessories</li>
        <li className={classes.border}>Swimwear</li>
        <p className={classes.header4}>Gadgets</p>
        <li>Smart Wearables</li>
        <li>Fitness Gadgets</li>
        <li>Headphones</li>
        <li>Speakers</li>
        </div>
        <div className="column">
        <p className={classes.header4}> Fashion Accessories</p>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li className={classes.border}>Helmets</li>
          <p className={classes.header4}>Bags & Backpacks</p>
          <p className={classes.header4}>Luggages & Trolleys</p>
        </div>
      </div>
    </div>
  </div> 
</div>
         <div className="navbar">
 
  <div className="dropdown">
    <button className="dropbtn5">BEAUTY 
     
    </button>
    <div className="dropdown-content">  
      <div className="row">
      <div className="column">
          <p className={classes.header5}>Topwear</p>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li className={classes.border}>Rain Jackets</li>
          <p className={classes.header5}>Indian & Festive Wear</p>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </div>
        <div className="column1">
        <p className={classes.header5}>Bottomwear</p>
        <li> Jeans</li>
        <li>Casual Trousers</li>
        <li>Formal Trousers</li>
        <li>Shorts</li>
        <li className={classes.border}>Track Pants & Joggers</li>
        <p className={classes.header5}>Innerwear & Sleepwear</p>
        <li> Briefs & Trunks</li>
        <li>Boxers</li>
        <li>Vests</li>
        <li>Sleepwear & Loungewear</li>
        <li className={classes.border}>Thermals</li>
        <p className={classes.header5}>Plus Size</p>
        </div>
        <div className="column">
        <p className={classes.header5}>Footwear</p>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
          <li className={classes.border}>Suits</li>
          <p className={classes.header5}>Personal Care & Grooming</p>
          <p className={classes.header5}> Sunglasses & Frames</p>
          <p className={classes.header5}>Watches</p>
        </div>
        <div className="column1">
        <p className={classes.header5}>Sports & Active Wear</p>
        <li>Sports Shoes</li>
        <li>Sports Sandals</li>
        <li>Active T-Shirts</li>
        <li>Track Pants & Shorts</li>
        <li>Tracksuits</li>
        <li>Jackets & Sweatshirts</li>
        <li>Sports Accessories</li>
        <li className={classes.border}>Swimwear</li>
        <p className={classes.header5}>Gadgets</p>
        <li>Smart Wearables</li>
        <li>Fitness Gadgets</li>
        <li>Headphones</li>
        <li>Speakers</li>
        </div>
        <div className="column">
        <p className={classes.header5}> Fashion Accessories</p>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li className={classes.border}>Helmets</li>
          <p className={classes.header5}>Bags & Backpacks</p>
          <p className={classes.header5}>Luggages & Trolleys</p>
        </div>
      </div>
    </div>
  </div> 
</div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for products,brands and more"
              classes={{
                focused: classes.focused,
                root:classes.inputRoot,
                input: classes.inputInput,
              }}
              
            />
          </div>
        
         <div className={classes.bt1}><PermIdentityIcon style={{color:"#7A7C7E"}} /><p  style={{margin:"0"}}>Profile</p></div>
         <div className={classes.bt2}><FavoriteBorderIcon style={{color:"#7A7C7E"}} /><p style={{margin:"0"}}>Wishlist</p></div>
         <div className={classes.bt2}><LocalMallOutlinedIcon style={{color:"#7A7C7E"}} /><p style={{margin:"0"}}>Bag</p></div>
         
          </Toolbar>
      </AppBar>
    </div>
  );
}
