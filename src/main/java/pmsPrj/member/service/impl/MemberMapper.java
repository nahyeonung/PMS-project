package pmsPrj.member.service.impl;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;
import org.springframework.stereotype.Repository;

import pmsPrj.member.vo.MemberInfoVO;

@Repository
@Mapper("memberMapper")
public interface MemberMapper {

	MemberInfoVO selectMemberInfo();
}
