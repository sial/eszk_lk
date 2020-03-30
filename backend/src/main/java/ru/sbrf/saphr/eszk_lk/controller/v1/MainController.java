package ru.sbrf.saphr.eszk_lk.controller.v1;

import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import ru.sbrf.saphr.eszk_lk.dto.MainDTO;
import ru.sbrf.saphr.eszk_lk.service.MainService;

@Controller
@RequiredArgsConstructor
public class MainController {

    private final MainService mainService;

    @GetMapping(value = "/")
    public ModelAndView dashboard() {
        ModelAndView modelAndView = new ModelAndView("dashboard");

//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        String id = auth.getId();

        MainDTO mainDTO = mainService.findById("test");
        modelAndView.addObject("id", mainDTO.getId());
        modelAndView.addObject("name", mainDTO.getName());
        return modelAndView;
    }

}
