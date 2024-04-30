package pmsPrj.member.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class MemberInfoVO {
	
	private String name;
	private int dept;
	private int rank;
	private int division;
	private String license;
}
