export interface problemType {
    problem:string;
    choose:string[];
    collect:number;
}

export const 화재대응퀴즈 = [
    {
        problem: "건물에 화재가 발생해서 이 건물을 빠져나가려고 한다. 이 때 필요한 것은 무엇일까?",
        choose: ["엘리베이터", "폭탄", "물에 적신 수건", "용접 기구"],
        collect: 2
    },
    {
        problem: "아파트에 화재가 발생해서 재빨리 밖으로 튈려고 한다. 이 때 해야할 행동이 아닌 것은 무엇일까?",
        choose: ["모든 이웃집 문을 두드리며 나간다.", "119에 신고한다.", "계단을 이용한다.", "아파트 벽을 타고 내려간다."],
        collect: 3
    },
    {
        problem: "조금전에 화재가 나서 탈출하고 있는데 비상구 계단 문고리가 벌겋게 달아올라 있었다. 다음 중 해야할 행동은 무엇일까?",
        choose: ["불이 난 곳과 멀리 떨어져 구조 요청을 한다.", "신기하니 문고리를 만져 온도를 확인한다.", "물에 적신 수건으로 문을 열어 뛰어든다.", "문앞에 서있는다."],
        collect: 0
    },
    {
        problem: "요리를 하다 갑자기 불이났다. 너무 당황해 패닉에 빠지고 마는데, 해야할 행동으로 옳은 것은 무얼일까?",
        choose: ["침착하고 소화기를 가져와 불을 끈다.", "가스불에 소화기를 집어던진다.", "침착하고 요리를 계속한다.", "가족들에게 전화한다."],
        collect: 0
    },
    {
        problem: "엘리베이터에 타고있는데 갑자기 불이났다고 한다. 이 때 해야할 행동은 무엇일까?",
        choose: ["망연자실한다.", "엘리베이터 문을 강제로 열어 재낀다.", "눌러놨던 층에 갈때까지 기다린다.", "모든 층을 누르고, 비상벨을 누른다."],
        collect: 3
    },
    {
        problem: "옷에 불이 붙어버렸다. 옆에는 친구가 있다. 이 때 친구에게 요구해야 할 말은 무엇일까?",
        choose: ['"흑흑, 가족들에게 안부 전해줘..."', '"빨리! 불이 난 곳을 옷으로 때려!"', '"아아... 난 글렀어..."', '빨리! 도망가!'],
        collect: 1
    },
    {
        problem: "차를 타고 가던 중, 누군가가 다음 농사를 위해 밭을 태우고 있는 모습을 보았다. 그런데 갑자기 불똥이 산쪽으로 튀는 것이 아닌가! 이 때 해야할 행동으로 옳은 것은 무엇일까?",
        choose: ["119에 신고한다.", "차에서 내려서 밭을 태우는걸 도와드린다.", "놀란 마음을 부여잡고 풀악셀을 밟는다.", "에어컨을 틀어 땀을 식힌다."],
        collect: 0
    },
    {
        problem: "어느 밀폐된 공간에서 열기가 느껴지고있었다. 그래서 그 공간의 문을 열어 재꼈다. 그런데 안에서 불이 활활 타오르고 있었다. 이 때 바로 해야 할 행동은?",
        choose: ["불길이 여기까지 닿지 않으니 가만히 있는다.", "안쪽을 살펴본다.", "누구보다 빠르게 문으로부터 떨어진다.", "사진을 찍어 인스타에 올린다."],
        collect: 2
    },
    {
        problem: "기숙사 복도를 걷던 중, 갑자기 화재 경보가 울렸다. 하지만 다들 그동안의 오작동으로 인해 가짜라고 생각하는 듯 밖으로 나오는 사람이 없었다. 그 때, 앞에서 문이 활짝 열리며 연기와 함께 탈출하는 친구들이 보이는데..! 이 때 하지 말아야 할 행동은?",
        choose: ["모든 호실의 문을 두드리며 탈출한다.", "119에 신고한다.", "소화전에서 호스를 꺼내와 물을 뿌린다.", "탈출한 친구들을 다시 돌려보낸다."],
        collect: 3
    },
    {
        problem: "유튜브 쇼츠에서 본 폭죽 많이 붙여놓고 쏘는게 재밌어 보여 따라하보려고 한다. 불을 붙이니 갑자기 한꺼번에 터지는게 아닌가! 그렇게 갑자기 불이나고 말았다. 이 때 해야할 행동은 무엇일까?",
        choose: ["친구들을 불러 구경시킨다.", "인증샷을 남긴다.", "119를 부른다.", "선생님을 부른다."],
        collect: 2
    },
]