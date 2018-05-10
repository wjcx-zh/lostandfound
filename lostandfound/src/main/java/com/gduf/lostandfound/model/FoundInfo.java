package com.gduf.lostandfound.model;

import java.util.Date;

public class FoundInfo {
	private Integer findId;
	private String findName;
	private String trait;
	private String findPlace;
	private Date findTime;
	private String finderName;
	private String contact;
	private String storePlace;
	private Date storeDate;
	private int hasReturn;
	public FoundInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FoundInfo(String findName, String trait, String findPlace, Date findTime, String finderName, String contact,
			String storePlace, Date storeDate) {
		super();
		this.findName = findName;
		this.trait = trait;
		this.findPlace = findPlace;
		this.findTime = findTime;
		this.finderName = finderName;
		this.contact = contact;
		this.storePlace = storePlace;
		this.storeDate = storeDate;
	}
	@Override
	public String toString() {
		return "FoundInfo [findId=" + findId + ", findName=" + findName + ", trait=" + trait + ", findPlace="
				+ findPlace + ", findTime=" + findTime + ", finderName=" + finderName + ", contact=" + contact
				+ ", storePlace=" + storePlace + ", storeDate=" + storeDate + "]";
	}
	public Integer getFindId() {
		return findId;
	}
	public void setFindId(Integer findId) {
		this.findId = findId;
	}
	public String getFindName() {
		return findName;
	}
	public void setFindName(String findName) {
		this.findName = findName;
	}
	public String getTrait() {
		return trait;
	}
	public void setTrait(String trait) {
		this.trait = trait;
	}
	public String getFindPlace() {
		return findPlace;
	}
	public void setFindPlace(String findPlace) {
		this.findPlace = findPlace;
	}
	public Date getFindTime() {
		return findTime;
	}
	public void setFindTime(Date findTime) {
		this.findTime = findTime;
	}
	public String getFinderName() {
		return finderName;
	}
	public void setFinderName(String finderName) {
		this.finderName = finderName;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getStorePlace() {
		return storePlace;
	}
	public void setStorePlace(String storePlace) {
		this.storePlace = storePlace;
	}
	public Date getStoreDate() {
		return storeDate;
	}
	public void setStoreDate(Date storeDate) {
		this.storeDate = storeDate;
	}
	public int getHasReturn() {
		return hasReturn;
	}
	public void setHasReturn(int hasReturn) {
		this.hasReturn = hasReturn;
	}
	
}
