package pmsPrj.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {
	
	@RequestMapping(value = "/egovSampleList.do")
	public String justMyTestCode()  {
		System.out.println("거긴 안됩니다 형님~");
		return "nexacro/index";
	}
}
