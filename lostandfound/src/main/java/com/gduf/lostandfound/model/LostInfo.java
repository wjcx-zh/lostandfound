package com.gduf.lostandfound.model;

import java.util.Date;

public class LostInfo {
	private Integer lostId;
	private String lostName;
	private String trait;
	private String lostPlace;
	private Date lostTime;
	private String losserName;
	private String contact;
	private Date postDate;
	private int hasFound;
	public LostInfo(String lostName, String trait, String lostPlace, Date lostTime, String losserName, String contact,
			Date postDate) {
		super();
		this.lostName = lostName;
		this.trait = trait;
		this.lostPlace = lostPlace;
		this.lostTime = lostTime;
		this.losserName = losserName;
		this.contact = contact;
		this.postDate = postDate;
	}
	public LostInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getLostId() {
		return lostId;
	}
	public void setLostId(Integer lostId) {
		this.lostId = lostId;
	}
	public String getLostName() {
		return lostName;
	}
	public void setLostName(String lostName) {
		this.lostName = lostName;
	}
	public String getTrait() {
		return trait;
	}
	public void setTrait(String trait) {
		this.trait = trait;
	}
	public String getLostPlace() {
		return lostPlace;
	}
	public void setLostPlace(String lostPlace) {
		this.lostPlace = lostPlace;
	}
	public Date getLostTime() {
		return lostTime;
	}
	public void setLostTime(Date lostTime) {
		this.lostTime = lostTime;
	}
	public String getLosserName() {
		return losserName;
	}
	public void setLosserName(String losserName) {
		this.losserName = losserName;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public Date getPostDate() {
		return postDate;
	}
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	public int getHasFound() {
		return hasFound;
	}
	public void setHasFound(int hasFound) {
		this.hasFound = hasFound;
	}
	@Override
	public String toString() {
		return "LostInfo [lostId=" + lostId + ", lostName=" + lostName + ", trait=" + trait + ", lostPlace=" + lostPlace
				+ ", lostTime=" + lostTime + ", losserName=" + losserName + ", contact=" + contact + ", postDate="
				+ postDate +",hasFound="+hasFound+ "]";
	}
	
}
