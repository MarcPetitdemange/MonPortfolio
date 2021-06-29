package com.example.portfolio.model;

public class HelloWorld {

    String value;

    public HelloWorld() {
    }

    public HelloWorld(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "HelloWorld{" +
                "value='" + value + '\'' +
                '}';
    }
}
