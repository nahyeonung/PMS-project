package pmsPrj.member.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import pmsPrj.member.service.MemberService;
import pmsPrj.member.vo.MemberInfoVO;
import pmsPrj.member.vo.SearchVO;

@Controller
public class MemberController {
	
	@Resource(name = "memberService")
	private final MemberService memberService;
	
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}
	
	@RequestMapping(value = "/selectMemberInfo.do")
	public NexacroResult selectMemberInfo(
			@ParamDataSet(name="input1") SearchVO searchVO) {
		System.out.println("여기를 와야해");
		MemberInfoVO memberInfo = memberService.searchMemberInfo();
		
		System.out.println(memberInfo);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("output1", memberInfo);
		
		return result;
	}
}
