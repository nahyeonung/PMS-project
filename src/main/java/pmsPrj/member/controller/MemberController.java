package pmsPrj.member.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

import pmsPrj.member.service.MemberService;
import pmsPrj.member.vo.LoginInfoVO;
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
	
	@RequestMapping(value = "/login.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void procLogin(HttpSession session, HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		int retCode;
		String retMsg;
		
		// id, pwd 파라미터
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		VariableList in_varList = in_pData.getVariableList();
		String id = in_varList.getString("id");
		String pwd = in_varList.getString("pwd");
		
		// 로그인 처리
		boolean rst = isUser(id, pwd);
		
		if(rst) {
			// 세션 등록
			LoginInfoVO userMap = getUser(id);
			session.setAttribute("USER", userMap);
			
			retCode = 0;
			retMsg = "로그인 되었습니다.";
		}
		else {
			//세션 삭제
			session.removeAttribute("USER");
			
			retCode = -1;
			retMsg = "로그인에 실패 하였습니다.";
		}
		
		//response 생성
		PlatformData out_pData = new PlatformData();
		
		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", retCode);
		out_varList.add("ErrorMsg", retMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(out_pData);
		
		pRes.sendData();
	}
	
	private boolean isUser(String id, String pwd) throws Exception {
		return memberService.loginCheck(id, pwd);
	}
	
	private LoginInfoVO getUser(String id) throws Exception {
		
		return memberService.procLogin(id);
	}
}
