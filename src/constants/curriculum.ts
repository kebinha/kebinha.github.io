import { Section } from "../components/curriculum";

export interface CurriculumItemType {
    title: string;
    description: string;
    curriculum?: Section[];
}

type Curriculum = {
    title: string;
    description: string;
    items: CurriculumItemType[];
}[];

const curriculum: Curriculum = [
    {
        title: "대학 기초 프로그램",
        description:
            "SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다. SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.",
        items: [
            {
                title: "리눅스 기초 (30시간)",
                description:
                    "Linux 운영 체제를 이해하고 시스템 프로그램 작성 능력을 키웁니다. 이는 IT 분야의 기본이 되는 기술 중 하나로, 다양한 분야에서 필요로 하는 기술입니다.",
            },
            {
                title: "Python (40시간)",
                description:
                    '파이썬 프로그래밍 언어를 PEP8("Style Guide for Python Code")에 의거하여 Python을 보다 Pythonic하게 배울 수 있는 수업으로 구성하였습니다. 파이썬 프로그램 개념과 활용하기 위한 원리와 기초 개념을 배우면서 실무적 방법으로 교육하고자 합니다.',
                curriculum: [
                    {
                        title: "파이썬 환경설정(Anaconda/Miniconda, VScode설치)",
                        units: ["python 변수의 개념(str, float, int, bool type의 이해)", "각 변수별 특징들"],
                    },
                    {
                        title: "python 변수의 개념(str, float, int, bool type의 이해)",
                    },
                    {
                        title: "python 자료구조의 이해(dict, tuple, list, set 등)",
                        units: [
                            "사전(dictionary)자료형에 대한 이해",
                            "List,Tuple자료형",
                            "set자료형",
                            "그밖의 자료형(collections)",
                        ],
                    },
                    {
                        title: "조건문(If/elif/else)",
                    },
                    {
                        title: "반복문",
                        units: ["while-loop/for-loop", "break/continue/pass"],
                    },
                    {
                        title: "예외처리(try-except-finally)",
                    },
                    {
                        title: "Generator/iterator(yield)에 대한 이해",
                    },
                    {
                        title: "file다루기",
                        units: ["os package", "Context Manager(with 구문)", "직렬화(pickle패키지)"],
                    },
                    {
                        title: "데코레이터(Decorator) 사용방법",
                        units: ["Property", "getter/setter"],
                    },
                ],
            },
            {
                title: "C/C++ 프로그래밍 (40시간)",
                description:
                    "C/C++ 프로그래밍 수업으로 객체지향 프로그래밍과 디자인패턴을 중심으로 현장에서 사용할 수 있는 다형성 기법을 습득하는 실무적 교육입니다.",
                curriculum: [
                    {
                        title: "객체지향 프로그래밍(Object Oriented Programming, OOP)란?",
                    },
                    {
                        title: "메서드 오버라이딩, 다형성",
                    },
                    {
                        title: "추상클래스와 인터페이스",
                    },
                    {
                        title: "Thread, Proccess개념과 실습",
                    },
                ],
            },
            {
                title: "알고리즘/자료구조 (50시간)",
                description:
                    "SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다. SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.",
                curriculum: [
                    {
                        title: "자료구조/Big-Oh의 개념",
                    },
                    {
                        title: "링크드 리스트(Linked List)",
                    },
                    {
                        title: "스택(Stack)",
                    },
                    {
                        title: "큐(Queue)",
                    },
                    {
                        title: "정렬(Sort)",
                        units: [
                            "삽입정렬(Insertion Sort)",
                            "선택정렬(Selection Sort)",
                            "병합정렬(Merge Sort)",
                            "퀵소트(Quick Sort)",
                        ],
                    },
                    {
                        title: "트리(Tree)",
                        units: ["전연결트리/완전연결트리", "이진트리"],
                    },
                    {
                        title: "그래프 알고리즘",
                    },
                    {
                        title: "최단경로(Shortest Path) 알고리즘",
                        units: ["BFS/DFS", "크루스칼 알고리즘", "프림 알고리즘"],
                    },
                ],
            },
            {
                title: "데이터베이스 (40시간)",
                description:
                    "데이터베이스 관리 시스템의 개념, ER디자인, 관계형 모델, 정규화기법, 계층형 모델, 망 모델 그리고 파일조직 등으로 요약될 수 있습니다. ",
            },
            {
                title: "취업을 위한 코딩 테스트 (40시간)",
                description:
                    "IT취준생이라면 누구나 가고 싶어 하는 네이버 카카오 라인 삼성전자 등의 코딩 테스트와 알고리즘 대회에서 나올 수 있는 문제를 수록하여 최근 5년간의 코딩 테스트 기출문제를 분석하여 반드시 알아야 하는 알고리즘 직접 서버에 제출하고 풀어보는 수업으로 요약될 수 있습니다.",
                curriculum: [
                    {
                        title: "구현(Brute Force)",
                    },
                    {
                        title: "DFS/BFS",
                    },
                    {
                        title: "그리디(Greedy)",
                    },
                    {
                        title: "정렬(Sort) - Binary, Quick",
                    },
                    {
                        title: "이진탐색(Binary Search)",
                    },
                    {
                        title: "다이나믹 프로그래밍(Dynamic Programming)",
                    },
                    {
                        title: "최단경로(Shortest Path)",
                    },
                    {
                        title: "그래프 이론 - Union Find",
                    },
                ],
            },
        ],
    },
    {
        title: "기업 집중 교육",
        description:
            "SW 개발은 여러가지 분야가 존재합니다. 현업에서 사용할 수 있는 기술을 배우기 위해 기업 집중 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다. 기업 집중 교육은 크게 협업 멘토들이 교육하는 기업실무(50시간)와 세부분야 실무(50시간), 심화 프로젝트(300시간)로 구성되어 있습니다. ",
        items: [
            {
                title: "기업 실무(50시간)",
                description: " ",
                curriculum: [
                    {
                        title: "클라우드 네이티브 + 네트워크",
                        units: [
                            "주관: 티맥스 클라우드",
                            "클라우드 네이티브는 현대 소프트웨어 개발 및 배포를 변혁시키는 개념이며, 네트워크는 모든 IT 환경의 핵심 요소입니다. 이 교육에서는 이러한 주제에 대한 핵심 원칙과 실무적인 이해를 제공할 것입니다. ",
                        ],
                    },
                    {
                        title: "WebOS",
                        units: [
                            "주관: LG전자",
                            "WebOS는 스마트 TV, 스마트폰 및 여러 장치에서 사용되는 운영체제입니다. 현업에서 필요한 지식과 스킬을 습득하고, WebOS를 이용한 자율주행 관련 콘텐츠 제작을 진행합니다. ",
                        ],
                    },
                ],
            },
            {
                title: "세부 분야 실무(50시간)",
                description:
                    "교육은 크게  스마트 팩토리 헬스케어 게임/미디어 인공지능서비스, 자율주행 으로 구성되어 있습니다.",
            },
            {
                title: "기업체 심화 프로젝트(50시간)",
                description:
                    "27개 참여기업(SK C&C, LG전자, 한글과컴퓨터, MDS 테크놀로지 등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업 역량을 갖춘 SW 개발자로 거듭날 수 있습니다. 자세한 설명은 아래 섹션에 기재되어 있습니다. ",
            },
        ],
    },
];

export default curriculum;
