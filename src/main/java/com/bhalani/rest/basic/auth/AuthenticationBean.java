package com.bhalani.rest.basic.auth;

public class AuthenticationBean {
	
	String msg;
public AuthenticationBean(String str) {
		msg = str;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "HelloWorld [msg=" + msg + "]";
	}
	
}
