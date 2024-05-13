package pmsPrj.member.service;

import java.util.List;

import pmsPrj.member.vo.LoginInfoVO;
import pmsPrj.member.vo.MemberInfoVO;

public interface MemberService {
	
	MemberInfoVO searchMemberInfo();
	
	boolean loginCheck(String id, String pwd);
	
	LoginInfoVO procLogin(String id);
}
