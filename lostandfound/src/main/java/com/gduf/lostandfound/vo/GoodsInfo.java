package com.gduf.lostandfound.vo;

import java.util.Date;

public class GoodsInfo {
	private String goodsName;
	private Date dateFrom;
	private Date dateTo;
	
	public GoodsInfo() {
		super();
		// dateToDO AudateTo-generated construcdateTor stub
	}
	public GoodsInfo(String goodsName, Date dateFrom, Date dateTo) {
		super();
		this.goodsName = goodsName;
		this.dateFrom = dateFrom;
		this.dateTo = dateTo;
	}
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public Date getDateFrom() {
		return dateFrom;
	}
	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}
	public Date getDateTo() {
		return dateTo;
	}
	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}
}
