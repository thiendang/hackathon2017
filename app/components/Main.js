import React from 'react';


var newMang = [];

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			sellArray: [
				{
					id: '#1144',
					textSell: 'cần bán 2kg cá, gía 800000đ'
				},
				{
					id: '#1234',
					textSell: 'hiện tại còn 5kg cua tươi ngon, giá bán chỉ 100.000đ/kg. Địa chỉ: sô 5 đường Thống Nhất, tp Vũng Tàu. Số lượng có hạn, mua nhanh kẻo hết.'
				},
				{
					id: '#1111',
					textSell: 'bánh mì Sài Gòn mới ra lò ở Vũng Tàu, đảm bảo thơm ngon giòn rụm. Quý khách nào muốn thưởng thức thì hãy đến ngay đầu chợ Xóm Lưới trên đường Nguyễn Công Trứ, tp Vũng Tàu.'
				},
				{
					id: '#1007',
					textSell: 'Nhà trọ Nhật Hoàng còn trống 1 phòng rộng 30m2, đầy đủ tiện nghi, giá chỉ 2 triệu/tháng. Địa chỉ liên hệ: số 6 Nguyễn Công Trứ'
				},
				{
					id: '#1235',
					textSell: 'Cafe cây sung trên đường Nguyễn Du hiện đang có chương trình khuyến mãi giảm 30% giá tiền trong 2 ngày 26 và 27/8/2017'
				},
				{
					id: '#1134',
					textSell: 'hiện có 3kg mực 1 nắng giá rẻ tại 212 Nam Kỳ Khởi Nghĩa. Đảm bảo chất lượng tuyệt hảo, ăn là nghiền'
				},
				{
					id: '#1357',
					textSell: 'đối diện Nguyễn Kim đang có bán quần áo giày dép giá sỉ, chỉ bán duy nhất đêm thứ 2 & thứ 3 (28 & 29/8). Mọi người tranh thủ nhanh kẻo hết.'
				},
				{
					id: '#1236',
					textSell: 'rau muống, cải xanh không thuốc trừ sâu, vừa mới hái từ vườn lên, đang bán tại 15 Lý Tự Trọng'
				}
			]		}
	}
	handleCall = () => {
		window.location.href = "/a"
	}
	handleDel =() => {
		newMang = this.state.sellArray.splice(this.props.id, 1);
	    this.setState({sellArray: this.state.sellArray});
	}
  	render(){
  		console.log(this.state.sellArray)
	    return (
	    	<div>
		        {
		        	this.state.sellArray.map((e, index) => {
		        		return(
					        <div className="sell" key={e.id} id={index}>
					            <p className="text-sell">{e.textSell}</p>
					            <div>
					            	<button type="button" className="btn btn-default" onClick={this.handleDel}>Xóa</button>
					            	<button type="button" className="btn btn-primary" onClick={this.handleCall}>Gọi</button>
					            </div>
					        </div>
		        		)
		        	})
		        }
	        </div>
	    )
  	}
}

module.exports = Main;
