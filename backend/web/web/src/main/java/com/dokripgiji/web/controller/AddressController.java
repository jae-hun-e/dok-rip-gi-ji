package com.dokripgiji.web.controller;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.domain.user.User;
import com.dokripgiji.web.service.AddressService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.net.http.HttpRequest;
import java.util.Enumeration;

@RestController
@RequestMapping("/adr")
public class AddressController {

    private final AddressService addressService;

    HttpServletRequest request;

    @PostMapping
    public String update(@RequestBody AddressRequestDto requestDto){
//        System.out.println("requestDto = " + requestDto);
        HttpSession s=(HttpSession) request.getSession();
        String e= (String) s.getAttribute("email");

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal!="anonymousUser"){
            User user=(User) principal;

            String email = (String) user.getEmail();
            System.out.println("email = " + email);
            addressService.saveAddress(requestDto, email);
        }else if(e!=null){
            System.out.println("email = " + e);
            addressService.saveAddress(requestDto, e);
        }else {
            System.out.println("로그인이 필요합니다.");
        }

        return "OK";
    }


    public AddressController(AddressService addressService, HttpServletRequest request) {
        this.addressService = addressService;
        this.request = request;
    }
}


