package com.bhalani.rest.webservices.restfulwebservices.helloworld;

public class HelloWorld {
	
	String msg;
public HelloWorld(String str) {
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
