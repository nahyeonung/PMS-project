package pmsPrj.member.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import pmsPrj.member.service.MemberService;
import pmsPrj.member.vo.LoginInfoVO;
import pmsPrj.member.vo.MemberInfoVO;

@Service("memberService")
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	
	private final MemberMapper memberMapper;

	@Override
	public MemberInfoVO searchMemberInfo() {
		return memberMapper.selectMemberInfo();
	}

	@Override
	public boolean loginCheck(String id, String pwd) {
		return memberMapper.loginCheck(id, pwd);
	}
	
	@Override
	public LoginInfoVO procLogin(String id) {
		return memberMapper.procLogin(id);
	}

}
