package pmsPrj.member.service.impl;

import org.apache.ibatis.annotations.Param;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;
import org.springframework.stereotype.Repository;

import pmsPrj.member.vo.LoginInfoVO;
import pmsPrj.member.vo.MemberInfoVO;

@Repository
@Mapper("memberMapper")
public interface MemberMapper {

	MemberInfoVO selectMemberInfo();
	
	boolean loginCheck(@Param("id") String id, @Param("pwd") String pwd);
	
	LoginInfoVO procLogin(String id);
}
