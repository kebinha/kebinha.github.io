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
    title: "프로그래밍 기초",
    description:
      "SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다. 프로그래밍-기초 커리큘럼을 이수하기 위해서는 최소 2과목의 선택과목을 수강하여야 합니다.",
    items: [
      {
        title: "Python",
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
            units: ["사전(dictionary)자료형에 대한 이해", "List,Tuple자료형", "set자료형", "그밖의 자료형(collections)"],
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
        title: "JAVA 프로그래밍",
        description: "자바 프로그래밍 수업으로 객체지향 프로그래밍과 디자인패턴을 중심으로 현장에서 사용할 수 있는 다형성 기법을 습득하는 실무적 교육이다.",
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
    ],
  },
  {
    title: "SW 이론교육",
    description:
      "SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다. SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.",
    items: [
      {
        title: "알고리즘/자료구조",
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
            units: ["삽입정렬(Insertion Sort)", "선택정렬(Selection Sort)", "병합정렬(Merge Sort)", "퀵소트(Quick Sort)"],
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
        title: "취업을 위한 코딩 테스트",
        description:
          "IT취준생이라면 누구나 가고 싶어 하는 네이버 카카오 라인 삼성전자 등의 코딩 테스트와 알고리즘 대회에서 나올 수 있는 문제를 수록하여 최근 5년간의 코딩 테스트 기출문제를 분석하여 반드시 알아야 하는 알고리즘 직접 서버에 제출하고 풀어보는 수업으로 요약될 수 있다.",
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
      {
        title: "데이터베이스",
        description: "데이터베이스 관리 시스템의 개념, ER디자인, 관계형 모델, 정규화기법, 계층형 모델, 망 모델 그리고 파일조직 등으로 요약될 수 있다",
      },
    ],
  },
  {
    title: "SW 기술역량",
    description:
      "SW 개발은 여러가지 분야가 존재합니다. 현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.",
    items: [
      {
        title: "빅데이터 분석 및 시각화",
        description:
          "빅데이터 분석에 필요한 주요 방법론 및 알고리즘에 대해 다룬다 주요 빅데이터 분석 알고리즘에 대한 이론적 분석 및 실제 적용 예에 대해 소개한다. Python 및 Docker, FastAPI을 이용하여 Model Serving에 필요한 다양한 프레임워크를 익히고 핵심 알고리즘들을 직접 구현하도록 한다. ",
        curriculum: [
          {
            title: "빅데이터 개요 및 활용",
            units: ["빅데이터의 특징 및 가치", "빅데이터 산업의 이해"],
          },
          {
            title: "데이터 분석 계획",
            units: ["분석 방안 및 빅데이터 기술 소개", "데이터 수집 및 전환 이해"],
          },
          {
            title: "데이터 수집 및 전처리",
            units: ["판다스(Pandas) 프레임워크를 이용한 다양한 데이터 입출력", "넘파이(Numpy) 프레임워크를 이용한 수치형 데이터 분석"],
          },
          {
            title: "파이썬기반 데이터 분석(scikit-learn기초)",
            units: ["분석 모형의 구축과 평가", "데이터 탐색 및 전처리 개요"],
          },
          {
            title: "빅데이터 분석 기법",
            units: ["회귀분석, 의사결정나무, 서포트벡터 머신", "고급 분석 기법 소개"],
          },
          {
            title: "도커(Docker)를 활용한 개발환경 저장 및 배포",
            units: ["도커 기본 이해 및 환경 구축", "도커를 활용한 분석 모델 배포"],
          },
        ],
      },
      {
        title: "인공지능 및 기계학습",
        description:
          "인공지능의 주요 분야에서 개발된 여러가지 이론과 기법을 학습합니다. 기계 학습의 기초 이론 및 개념을 이해 및 관련 모델을 구현 해 보는 것을 목표로 합니다. 학습하게 될 주요내용은 인공지능을 통하여 Kaggle 등 실습 문제해결을 하고자 합니다. 사용하게될 언어는 Python, 프레임워크는 pytorch, pytorch-lightning, mmcv 등을 사용할 예정입니다.",
        curriculum: [
          {
            title: "지도학습/비지도학습/강화학습 개요",
            units: ["최신 인공지능 경험: stablediffusion, DALL-E 등"],
          },
          {
            title: "Linear Regression/Logistic Regression 기초",
          },
          {
            title: "Overfitting/Underfitting",
            units: ["Regularization기법소개(Dropout등)"],
          },
          {
            title: "기본적인 머신러닝 모델 설명(Scikit-learn프레임워크사용)",
            units: ["Support Vector Machine, RamdomForest, Ensemble 등", "Train/Validation/Test Dataset Split"],
          },
          {
            title: "딥러닝 Scratch(CNN or MLP numpy scratch구현)",
            units: ["Perceptron의 개념", "CNN(Convolutional Neural network), Transformer"],
          },
          {
            title: "CNN/Transformer모델 설명",
            units: ["VGG, Google, ResNet부터 SwinTransformer까지"],
          },
          {
            title: "Object Recognition/Detection",
            units: ["Kaggle 대회를 통한 실습 (1,2,3등에 따른 상금)"],
          },
          {
            title: "Unsupervised Learning",
            units: ["GAN(Generative Adversarial Network)"],
          },
          {
            title: "Self-Supervised Learning",
            units: ["Pretext-task", "Contrastive Learning"],
          },
          {
            title: "Reinforcement Learning",
          },
        ],
      },
      {
        title: "컴퓨터 네트워크",
        description:
          "컴퓨터 네트워크의 계층적인 프로토콜 구조를 이해하고 특히 인터넷에서 사용되고 있는 응용 프로그램, 트랜스포트 프로토콜, 라우팅 알고리즘과 프로토콜, 데이터센터, 무선모바일 네트워크에 대하여 집중적으로 학습한다.",
      },
    ],
  },
];

export default curriculum;
