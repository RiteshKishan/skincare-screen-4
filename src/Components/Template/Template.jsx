import React from "react";
import "./Template.css";
import search_icon from "../Assests/Search.svg";
import cross_icon from "../Assests/cross_icon.svg";
import template_icon from '../Assests/templates.svg';
import layout_icon from '../Assests/layout.svg'
import assests_icon from '../Assests/assessts.svg'
import color_icon from '../Assests/color.svg'
import background_icon from '../Assests/background.svg'
import shapes_icon from '../Assests/shapes.svg'
import images_icon from '../Assests/images.svg'
import icons_icon from '../Assests/icons.svg'

const Template = () => {

    const templateData =[{
        img:template_icon,
        name:'Templates'
    },{
        img:layout_icon,
        name:'Layout'
    },{
        img:assests_icon,
        name:'Assests'
    },{
        img:color_icon,
        name:'Color'
    },{
        img:background_icon,
        name:'Background'
    },{
        img:shapes_icon,
        name:'Shapes'
    },{
        img:images_icon,
        name:'Images'
    },{
        img:icons_icon,
        name:'Icons'
    },]

  return (
    <div className="template">
      <div className="template-conatiner">
        <div className="template-heading">Template Elements</div>
        <div className="search-input-box">
          <div className="template-search">
            <p>Search by patient name</p>
            <div className="search_icons">
              <span></span>
              <img src={search_icon} alt="" />
            </div>
          </div>
          <img src={cross_icon} alt="" className="cross_icon-img" />
        </div>

        <div className="element-container">
            {templateData.map((data,i ) => {
                return (
                    <div className="each_template">
                        <img src={data.img} alt="" />
                        <p>{data.name}</p>
                    </div>
                )
            })}
        </div>

        <div className="template-signature">
            <p>Signature</p>
            <div className="signature-input"></div>
        </div>

        <div className="template-button">
            <button>Save & Send</button>
        </div>
      </div>
    </div>
  );
};

export default Template;
