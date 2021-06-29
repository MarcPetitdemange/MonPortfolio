package com.example.portfolio.controller;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class DownloadController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(value="/files/**/{fileName}",method = RequestMethod.GET)
    public void getFile(HttpServletRequest request,@PathVariable("fileName") String fileName, HttpServletResponse response){
        try {
            String path = request.getRequestURI().split(request.getContextPath() + "/files/")[1];

            // get your file as InputStream
            Resource resource = new ClassPathResource(path);
            response.setContentType("application/pdf");
            response.addHeader("Content-Disposition", "attachment; filename="+fileName);
            IOUtils.copy(resource.getInputStream(), response.getOutputStream());
            response.flushBuffer();
        } catch (IOException ex) {
            throw new RuntimeException("IOError writing file to output stream");
        }
    }

}
