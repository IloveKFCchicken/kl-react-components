/**
 * Created by kyx on 2018/3/23.
 */
import React, {Component} from 'react'
import {Icon} from 'react-fa'

import './index.less'
export default class SimpleCarousel extends Component {
    constructor(props) {
        super(props);
        this.scrollX = 0;
        this.isMoving = false;
        this.navClickHandel = this.navClickHandel.bind(this);
        this.domTransform = this.domTransform.bind(this);
        this.reset = this.reset.bind(this);


        this.state = {
            settings : {
                dots: false,
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                spacing:20,
                slidesToScroll: 3,
                centerPadding:'50px'
            }
        }
    }
    componentDidMount(){
        const {settings:{slidesToShow,slidesToScroll,spacing}} = this.state;
        const num = slidesToShow || 1;
        const scrollNum = slidesToScroll || 1;
        const itemSpacing = spacing || 0;
        const listWidth = this.listWrap.clientWidth;
        const itemWidth = Math.floor((listWidth+ itemSpacing)/num);
        const {children} = this.props;
        const startPosition = -children.length * itemWidth;
        this.scrollWrap.style.width = (children.length * itemWidth * 3) + 'px';
        const leftMax = startPosition + itemWidth * num;
        const rightMax = startPosition - itemWidth * num;

        let _children = children.concat(children).concat(children);
        let list = [];
        _children.map((item,i)=>{
            let obj = Object.assign({},item,{key:i})
            list.push(obj)
        })

        this.setState({
            _children:list,
            config:{startPosition,scrollNum,num,itemWidth,leftMax,rightMax}
        },()=>{
            this.scrollX = startPosition;
            this.domTransform();
        })
    }

    navClickHandel(type){
        const {config:{itemWidth,scrollNum}} = this.state;

        if(type == 1){
            this.scrollX += itemWidth * scrollNum;
        }else if(type == 2){
            this.scrollX -= itemWidth * scrollNum;
        }
        const {settings:{speed}} = this.state;
        this.scrollWrap.style.transition="all " +(parseInt(speed)/1000).toFixed(2)+"s ease";
        this.domTransform();
    }

    domTransform (){
        if(this.isMoving) return

        this.isMoving = true;
        this.scrollWrap.style.transform = 'translate3d('+this.scrollX+'px,0,0)';
        this.scrollWrap.style.webkitTransform = 'translate3d('+this.scrollX+'px,0,0)';
        const {config:{leftMax,rightMax,num,itemWidth,startPosition}} = this.state;

        if(this.scrollX >= leftMax){
            console.log(num * itemWidth)
            this.scrollX += startPosition

            this.reset();
        }else if(this.scrollX <= rightMax){
            this.scrollX -= startPosition
            this.reset();
        }else{
            this.isMoving = false;
        }
    }

    reset(){
        const {settings:{speed}} = this.state;
        setTimeout(()=>{
            this.isMoving = false;
            this.scrollWrap.style.transition ="none";
            this.domTransform()
        },speed)

    }


    render(){
        const {children} = this.props;
        const {_children} = this.state;

        return (
            <div className="simple-carousel">
               <LeftButton callback={this.navClickHandel}/>
                <div className="carousel-list-wrap" ref={(ref)=>this.listWrap = ref}>
                    <div className="carousel-list-content" ref={(ref)=>this.scrollWrap = ref}>
                        {_children}
                    </div>
                </div>
                <RightButton callback={this.navClickHandel}/>
            </div>
        )
    }
}

const LeftButton = ({callback})=>{
    return (
        <div className="simple-carousel-button left" onClick={()=>callback(1)}>
            <Icon name="angle-left" size="2x"/>
        </div>
    )
}


const RightButton = ({callback})=>{
    return (
        <div className="simple-carousel-button right" onClick={()=>callback(2)}>
            <Icon name="angle-right" size="2x"/>
        </div>
    )
}