const address = [
  {
    매장명: '㈜아베스포츠  (본점)',
    지역: '서울특별시',
    상세주소: '서울시 동대문구 답십리2동산 2-9번지 힐스포파크 1층',
    전화번호: '02-504-6666',
  },
  {
    매장명: '㈜아베스포츠  (삼성점)',
    지역: '서울특별시',
    상세주소: '서울시 강남구 삼성동 150-30 예성빌딩2층, 지하1층',
    전화번호: '02-507-3333',
  },
  {
    매장명: '㈜아베스포츠 (현대백화점 아이파크몰점 )',
    지역: '서울특별시',
    상세주소: '서울시 용산구 한강로 3가 40-999 아이파크몰 패션관 5층',
    전화번호: '02-2012-4589',
  },
  {
    매장명: '고수스포츠 (답십리점)',
    지역: '서울특별시',
    상세주소: '서울특별시 동대문구 답십리2동 3-61 1층',
    전화번호: '02-2216-4301 ',
  },
  {
    매장명: '고수스포츠 (양재점)',
    지역: '서울특별시',
    상세주소: '서울시 서초구 양재동 202 더케이호텔내 골프클럽연습장',
    전화번호: '02-574-4789',
  },
  {
    매장명: '골프존 마켓(가산현대아울렛)',
    지역: '서울특별시',
    상세주소:
      '서울특별시 금천구 디지털로10길9, 현대시티아울렛 가산점, 5층 골프존마켓',
    전화번호: '02-2136-9930',
  },
  {
    매장명: '골프존 마켓(가산W몰점)',
    지역: '서울특별시',
    상세주소: '서울 금천구 가산동 60-27 W몰 8층',
    전화번호: '02-2081-0821',
  },
  {
    매장명: '골프존 마켓(광장점)',
    지역: '서울특별시',
    상세주소: '서울시 광진구 광나루로 556',
    전화번호: '02-457-1460',
  },
  {
    매장명: '골프존 마켓(김포공항쇼골프점)',
    지역: '서울특별시',
    상세주소: '서울 강서구 하늘길 233 B동 2층 골프존마켓',
    전화번호: '02-2662-2988',
  },
  {
    매장명: '골프존 마켓(당산점)',
    지역: '서울특별시',
    상세주소: '서울시 영등포구 양평동4가 7-1번지 1층',
    전화번호: '02-2069-1830',
  },
  {
    매장명: '골프존 마켓(대치점)',
    지역: '서울특별시',
    상세주소: '서울특별시 강남구 영동대로 311, 소모빌딩 1층 골프존마켓',
    전화번호: '02-554-3350',
  },
  {
    매장명: '골프존 마켓(도곡점)',
    지역: '서울특별시',
    상세주소: '서울시 강남구 도곡로 227 거봉빌딩 1층',
    전화번호: '02-563-1450',
  },
  {
    매장명: '골프존 마켓(동대문현대아울렛점)',
    지역: '서울특별시',
    상세주소:
      '서울특별시 중구 장충단로13길 20 현대시티아울렛 동대문점 7층 골프존마켓',
    전화번호: '02-2283-2738',
  },
  {
    매장명: '골프존 마켓(둔촌점)',
    지역: '서울특별시',
    상세주소: '서울시 강동구 성내동 396-16번지',
    전화번호: '02-470-1320',
  },
  {
    매장명: '골프존 마켓(롯데 노원점)',
    지역: '서울특별시',
    상세주소: '서울특별시 노원구 동일로 1414번지 롯데백화점 노원점 9층',
    전화번호: '02-931-2999',
  },
  {
    매장명: '골프존 마켓(마곡점)',
    지역: '서울특별시',
    상세주소: '서울 강서구 가양동 99-2 1,2F골프존마켓',
    전화번호: '02-3661-1870',
  },
  {
    매장명: '골프존 마켓(목동점)',
    지역: '서울특별시',
    상세주소: '서울특별시 양천구 국회대로 228, 골프존마켓',
    전화번호: '02-2690-5990',
  },
  {
    매장명: '골프존 마켓(반포점)',
    지역: '서울특별시',
    상세주소: '서울시 서초구 반포동 107-43 ROTC회관 1층',
    전화번호: '02-535-5240',
  },
  {
    매장명: '골프존 마켓(방이점)',
    지역: '서울특별시',
    상세주소: '서울시 송파구 방이동 149-4 1층',
    전화번호: '02-420-1360',
  },
  {
    매장명: '골프존 마켓(서초점)',
    지역: '서울특별시',
    상세주소: '서울시 서초구 남부순환로 2465 혜준빌딩 1층',
    전화번호: '02-523-1450',
  },
  {
    매장명: '골프존 마켓(압구정점)',
    지역: '서울특별시',
    상세주소: ' 서울시 강남구 논현동 7-13번지 2층 골프존 마켓 압구정점 ',
    전화번호: '02-6959-1506',
  },
  {
    매장명: '골프존 마켓(약수점)',
    지역: '서울특별시',
    상세주소: '서울시 중구 동호로 214 대현빌딩 1,2층',
    전화번호: '02-6952-4997',
  },
  {
    매장명: '골프존 마켓(양재점)',
    지역: '서울특별시',
    상세주소: '서울시 서초구 강남대로 190 대관빌딩',
    전화번호: '02-573-1520',
  },
  {
    매장명: '골프존 마켓(잠실점)',
    지역: '서울특별시',
    상세주소: '서울시 송파구 삼전로 71',
    전화번호: '02-416-1340',
  },
  {
    매장명: '골프존 마켓(잠원파스텔점)',
    지역: '서울특별시',
    상세주소:
      '서울특별시 서초구 신반포로길33길 23, 반포파스텔골프클럽 1층 골프존마켓',
    전화번호: '02-3482-2930',
  },
  {
    매장명: '골프존 마켓(장한평점)',
    지역: '서울특별시',
    상세주소: '서울 성동구 자동차시장길42 (X골프연습장 2호점) 1층',
    전화번호: '02-2215-2040',
  },
  {
    매장명: '골프존 마켓(청담점)',
    지역: '서울특별시',
    상세주소: '서울시 강남구 영동대로 741 은성빌딩 1층',
    전화번호: '02-541-2450',
  },
  {
    매장명: '골프존 마켓(트루핏목동현대점)',
    지역: '서울특별시',
    상세주소:
      '서울특별시 양천구 목동동로 257, 현대백화점 목동점 5층 골프존마켓',
    전화번호: '02-2163-1558',
  },
  {
    매장명: '골프존 마켓(현대시티몰 가든파이브점)',
    지역: '서울특별시',
    상세주소: '서울시 송파구 충민로 66 가든파이브 현대시티몰 테크노관 4층',
    전화번호: '02-2673-2471',
  },
  {
    매장명: '그린피아',
    지역: '서울특별시',
    상세주소: '서울특별시 강남구 도곡동 467-7 아카데미스위트 A-103',
    전화번호: '02-529-3346',
  },
  {
    매장명: '네스트골프',
    지역: '서울특별시',
    상세주소: '서울특별시 구로구 오류동 109 - 1 재도빌딩 1층 105-6호',
    전화번호: '070-7766-3255',
  },
  {
    매장명: '네스트골프',
    지역: '서울특별시',
    상세주소: '서울특별시 구로구 오류동 109 - 1 재도빌딩 1층 105-6호',
    전화번호: '070-7766-3255',
  },
  {
    매장명: '베스트골프',
    지역: '서울특별시',
    상세주소: '서울특별시 송파구 방이동 180-6',
    전화번호: '02-424-0111',
  },
  {
    매장명: '보스스포츠',
    지역: '서울특별시',
    상세주소: '서울특별시 금천구 시흥대로153길 16, 1층 102호 (독산동)',
    전화번호: '02-862-1872',
  },
  {
    매장명: '서울 티더블유통상',
    지역: '서울특별시',
    상세주소: '서울시 중랑구 용마산로 139 나길 93 1층',
    전화번호: '02-6959-2613',
  },
  {
    매장명: '서울에스엠',
    지역: '서울특별시',
    상세주소: '서울특별시 서초구 바우뫼로 182, 1층(양재동, S&C)',
    전화번호: '02-574-9388',
  },
  {
    매장명: '신사 PGA골프',
    지역: '서울특별시',
    상세주소: '서울시 강남구 압구정로 108 덕산빌딩 202호',
    전화번호: '02-511-4520',
  },
  {
    매장명: '신세계 (강남점)',
    지역: '서울특별시',
    상세주소: '서울시 서초구 반포동 19-3 8F 신세계백화점 직영골프샵',
    전화번호: '02-3479-1532',
  },
  {
    매장명: '신세계 (본점)',
    지역: '서울특별시',
    상세주소: '서울시 중구 충무로1가 52-5번지 신세계백화점 5층 직영골프샵',
    전화번호: '02-310-1537',
  },
  {
    매장명: '신세계 (영등포점)',
    지역: '서울특별시',
    상세주소:
      '서울시 영등포구 영등포동4가 434-5 A관 7F 신세계백화점 직영골프샵',
    전화번호: '02-2639-1536',
  },
  {
    매장명: '에스비스포츠',
    지역: '서울특별시',
    상세주소: '서울특별시 강동구 구천면로 304, 지하1층(천호동, 일주빌딩)',
    전화번호: '02-576-5357',
  },
  {
    매장명: '에스비스포츠 (삼성점)',
    지역: '서울특별시',
    상세주소: '서울시 강남구 봉은사로 506 경원빌딩 ',
    전화번호: '02-6713-5357',
  },
  {
    매장명: '엘로드힐스 서초직영',
    지역: '서울특별시',
    상세주소: '서울특별시 서초구 서초대로70길 32 코오롱스포렉스 신관1층',
    전화번호: '02-547-3122',
  },
  {
    매장명: '조아골프 (송파점)',
    지역: '서울특별시',
    상세주소: '서울특별시 송파구 문정동 150-2 롯데마트 송파점 지하1층',
    전화번호: '02-406-1872',
  },
  {
    매장명: '케이에스스포츠',
    지역: '서울특별시',
    상세주소:
      '서울특별시 서초구 매헌로 16 (양재동) 3층 3164,3165,3177,3178 (하이브랜드)',
    전화번호: '02-2155-1480',
  },
  {
    매장명: '퍼플핀 롯데백화점 건대점',
    지역: '서울특별시',
    상세주소:
      '서울특별시 광진구 능동로 92 (자양동, 롯데백화점) 건대스타시티점 6층 퍼플핀 골프샵',
    전화번호: '02-2218-3650',
  },
  {
    매장명: '퍼플핀 서울플래그쉽',
    지역: '서울특별시',
    상세주소: '서울특별시 강남구 도산대로 210 (논현동, 의화빌딩) 지하 1층',
    전화번호: '02-540-7281',
  },
  {
    매장명: '퍼플핀 송파점',
    지역: '서울특별시',
    상세주소: '서울특별시 송파구 동남로 149 (가락동)',
    전화번호: '02-407-7281',
  },
  {
    매장명: '한타로골프',
    지역: '서울특별시',
    상세주소: '서울특별시 도봉구 도봉로 495-1',
    전화번호: '02-907-1188',
  },
  {
    매장명: 'AK골프 가산점',
    지역: '서울특별시',
    상세주소:
      '서울특별시 금천구 벚꽃로 278 롯데팩토리 아울렛 가산점 3층 AK골프',
    전화번호: '02-2623-2320',
  },
  {
    매장명: 'AK골프 강남뉴코아점',
    지역: '서울특별시',
    상세주소: '서울 서초구 잠원로 51 뉴코아 아울렛 강남점, 2관 5층 AK골프',
    전화번호: '02-530-5136',
  },
  {
    매장명: 'AK골프 강남점',
    지역: '서울특별시',
    상세주소: '서울시 강남구 대치동 937번지 롯데백화점 강남점 6층 AK골프',
    전화번호: '02-531-2673',
  },
  {
    매장명: 'AK골프 강서NC점',
    지역: '서울특별시',
    상세주소: '서울 강서구 등촌동 689 NC백화점강서점 5층',
    전화번호: '02-2667-9630',
  },
  {
    매장명: 'AK골프 노원점',
    지역: '서울특별시',
    상세주소: '서울특별시 노원구 노원로 247(하계동)서울온천 건물 1층 AK골프',
    전화번호: '02-6674-4100',
  },
  {
    매장명: 'AK골프 대방점',
    지역: '서울특별시',
    상세주소: '서울특별시 동작구 노량진로74(대방동) 유한양행 구관2층 AK골프',
    전화번호: '02-6674-5900',
  },
  {
    매장명: 'AK골프 롯데본점',
    지역: '서울특별시',
    상세주소: '서울시 중구 소공동 1번지 롯데백화점 본점 6층 AK골프',
    전화번호: '02-726-4070',
  },
  {
    매장명: 'AK골프 방이점',
    지역: '서울특별시',
    상세주소: '서울시 송파구 방이동 115-3, 1층 AK골프',
    전화번호: '02-412-0855',
  },
  {
    매장명: 'AK골프 삼성점',
    지역: '서울특별시',
    상세주소: '서울 강남구 삼성동 127-12 고운빌딩 1층 AK골프매장',
    전화번호: '02-6207-5800',
  },
  {
    매장명: 'AK골프 서초점',
    지역: '서울특별시',
    상세주소: '서울 서초구 반포대로 43 코스모빌딩 1층',
    전화번호: '02-6677-2800',
  },
  {
    매장명: 'AK골프 센터필드점',
    지역: '서울특별시',
    상세주소:
      '서울특별시 강남구 테헤란로 231, 더샵스앳센터필드 쇼핑몰 1층 W120호',
    전화번호: '02-6985-7225',
  },
  {
    매장명: 'AK골프 영등포점',
    지역: '서울특별시',
    상세주소: '서울 영등포구 경인로 846 롯데백화점 영등포점 7층',
    전화번호: '02-2630-6731',
  },
  {
    매장명: 'AK골프 은평점',
    지역: '서울특별시',
    상세주소: '서울특별시 은평구 통일로 1050, 롯데몰 2층',
    전화번호: '02-6975-5050',
  },
  {
    매장명: 'AK골프 자양점',
    지역: '서울특별시',
    상세주소: '서울특별시 광진구 자양로 86(자양동 680-68호), 1층',
    전화번호: '02-6247-2100',
  },
  {
    매장명: 'AK골프 잠실점',
    지역: '서울특별시',
    상세주소: '서울시 송파구 잠실동 40-1번지 롯데백화점 잠실점 6층 AK골프',
    전화번호: '02-2143-7622',
  },
  {
    매장명: 'AK골프 장한평점',
    지역: '서울특별시',
    상세주소: '서울특별시 성동구 천호대로 366 (용답동 228-1), 1층',
    전화번호: '02-6212-1800',
  },
  {
    매장명: 'AK골프 청령리점',
    지역: '서울특별시',
    상세주소: '서울 동대문구 왕산로 214 롯데백화점 청량리점 6층',
    전화번호: '02-3707-1683',
  },
  {
    매장명: 'PGA골프',
    지역: '서울특별시',
    상세주소: '서울시 성동구 행당동 168-1 왕십리민자역사 7층',
    전화번호: '02-2200-1633',
  },
  {
    매장명: '㈜ 동양골프백화점 (본점)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 서현동 334-1',
    전화번호: '031-705-7878',
  },
  {
    매장명: '㈜ 영진골프랜드 아미가점',
    지역: '경기도',
    상세주소: '경기도 파주시 동서대로 700',
    전화번호: '031-944-1872 ',
  },
  {
    매장명: '㈜아베스포츠 (남양주 덕소삼패점 )',
    지역: '경기도',
    상세주소: '경기도 남양주시 고산로 249-3(삼패아울렛몰)',
    전화번호: '031-521-4411',
  },
  {
    매장명: '㈜아베스포츠 (일산점)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산동구 백마로 551',
    전화번호: '031-932-1872',
  },
  {
    매장명: '고수스포츠 (기흥점)',
    지역: '경기도',
    상세주소: '경기도 용인시 삼성2로 168 진미선골프클럽연습장',
    전화번호: '031-285-4789',
  },
  {
    매장명: '골프3651',
    지역: '경기도',
    상세주소: '경기 안양시 동안구 평촌동 39-41',
    전화번호: '031-476-1104',
  },
  {
    매장명: '골프존 마켓(광명철산점)',
    지역: '경기도',
    상세주소: '경기도 광명시 철산동 472-172 3층',
    전화번호: '02-3666-3370',
  },
  {
    매장명: '골프존 마켓(광명AK점)',
    지역: '경기도',
    상세주소: '경기도 광명시 일직동 512-3 AK플라자 광명점 3층 골프존마켓',
    전화번호: '02-898-5501',
  },
  {
    매장명: '골프존 마켓(남양주현대아울렛점)',
    지역: '경기도',
    상세주소:
      '경기 남양주시 다산동 6141 현대프리미엄아울렛 남양주점 3층 골프존마켓',
    전화번호: '031-8078-2310',
  },
  {
    매장명: '골프존 마켓(롯데아울렛 기흥점)',
    지역: '경기도',
    상세주소:
      '경기 용인시 기흥구 고매동 336-4 롯데프리미엄아울렛 기흥점 1층 8동',
    전화번호: '031-8036-3165',
  },
  {
    매장명: '골프존 마켓(미사하이마트점)',
    지역: '경기도',
    상세주소: '경기도 하남시 망월동 1159, 2층 골프존마켓',
    전화번호: '031-791-9030',
  },
  {
    매장명: '골프존 마켓(부천점)',
    지역: '경기도',
    상세주소: '경기 부천시 원미구 중4동 1035-2번지 하나빌딩 지상 1층 ',
    전화번호: '032-715-5042',
  },
  {
    매장명: '골프존 마켓(분당센터)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 대왕판교로 279, 1~4층 골프존마켓',
    전화번호: '031-715-4980',
  },
  {
    매장명: '골프존 마켓(분당이매점)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 판교로 470 우리빌딩1층',
    전화번호: '031-702-2450',
  },
  {
    매장명: '골프존 마켓(분당점)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 금곡동 375-1 DK프라자 3층',
    전화번호: '031-697-8201',
  },
  {
    매장명: '골프존 마켓(분당AK점)',
    지역: '경기도',
    상세주소:
      '경기도 성남시 분당구 황새울로 360번길 42, AK플라자 분당점 4층 골프존마켓',
    전화번호: '010-5316-5599',
  },
  {
    매장명: '골프존 마켓(분당AK플라자점)',
    지역: '경기도',
    상세주소:
      '경기도 성남시 분당구 황새울로 360번길 42, AK플라자 분당점 4층 골프존마켓',
    전화번호: '031-8023-2485',
  },
  {
    매장명: '골프존 마켓(수원영통점)',
    지역: '경기도',
    상세주소: '경기 수원시 영통구 원천동 296-4 1, 2층 골프존마켓',
    전화번호: '031-212-2950',
  },
  {
    매장명: '골프존 마켓(수원인계점)',
    지역: '경기도',
    상세주소: '경기도 수원시 팔달구 인계동 966-9 1층',
    전화번호: '031-234-8989',
  },
  {
    매장명: '골프존 마켓(스타필드 고양점)',
    지역: '경기도',
    상세주소: '경기도 고양시 덕양구 고양대로 1955',
    전화번호: '031-5173-2002',
  },
  {
    매장명: '골프존 마켓(스타필드 위례점)',
    지역: '경기도',
    상세주소: '경기 하남시 위례대로 200 3층 스타필드 위례점',
    전화번호: '031-8097-1378',
  },
  {
    매장명: '골프존 마켓(스타필드 하남점)',
    지역: '경기도',
    상세주소: '경기도 하남시 미사대로 750 스타필드 하남 2층',
    전화번호: '031-8072-8780',
  },
  {
    매장명: '골프존 마켓(신세계프리미엄 시흥점 )',
    지역: '경기도',
    상세주소: '경기도 시흥시 서해안로 699 시흥 프리미엄 아울렛',
    전화번호: '031-8072-3161',
  },
  {
    매장명: '골프존 마켓(안산점)',
    지역: '경기도',
    상세주소: '경기도 안산시 단원구 고잔동 706-3번지 1츨 골프존마켓',
    전화번호: '031-401-7447',
  },
  {
    매장명: '골프존 마켓(여주신세계아울렛점)',
    지역: '경기도',
    상세주소:
      '경기 여주시 명품로 360 신세계프리미엄아울렛 EAST High Street 골프존마켓',
    전화번호: '031-880-1367',
  },
  {
    매장명: '골프존 마켓(오산세교점)',
    지역: '경기도',
    상세주소: '경기 오산시 세교동 173-21 2층 골프존마켓',
    전화번호: '031-375-4930',
  },
  {
    매장명: '골프존 마켓(용인보정점)',
    지역: '경기도',
    상세주소: '경기도 용인시 기흥구 용구대로 2563',
    전화번호: '031-264-1430',
  },
  {
    매장명: '골프존 마켓(이천점)',
    지역: '경기도',
    상세주소:
      '경기도 이천시 호법면 단천리 산 46-1번지 롯데프리미엄아울렛 본관 3층',
    전화번호: '031-887-4511',
  },
  {
    매장명: '골프존 마켓(일산점)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산서구 덕이동  219-33번지 가동',
    전화번호: '031-926-2012',
  },
  {
    매장명: '골프존 마켓(일산중산점)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산동구 성석로 10 A동 골프존마켓',
    전화번호: '031-977-2060',
  },
  {
    매장명: '골프존 마켓(킨텍스현대점)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산서구 호수로 817 현대백화점 6층 골프존마켓',
    전화번호: '031-822-3695',
  },
  {
    매장명: '골프존 마켓(트루핏 분당점)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 금곡동 375-1번지 DK프라자 2층',
    전화번호: '031-717-1001',
  },
  {
    매장명: '골프존 마켓(파주롯데아울렛점)',
    지역: '경기도',
    상세주소: '경기도 파주시 회동길 390 롯데프리미엄아울렛 A-1블록 3층',
    전화번호: '031-960-2898',
  },
  {
    매장명: '골프존 마켓(평촌점)',
    지역: '경기도',
    상세주소: '경기도 안양시 동안구 평촌동 96-2 로데오 타운 2층',
    전화번호: '031-426-0821',
  },
  {
    매장명: '골프존 마켓(평택점)',
    지역: '경기도',
    상세주소: '경기도 평택시 세교동 617-9 1층 골프존마켓',
    전화번호: '031-656-5720',
  },
  {
    매장명: '골프존 마켓(현대프리미엄아울렛 김포점)',
    지역: '경기도',
    상세주소:
      '경기도 김포시 고촌읍 아라육로 152번길 100, 현대프리미엄아울렛 김포점 신관 타워존 2층',
    전화번호: '031-8048-2756',
  },
  {
    매장명: '구리아울렛',
    지역: '경기도',
    상세주소: '구리시 인창동 701-1',
    전화번호: '031-564-7890',
  },
  {
    매장명: '나이스골프',
    지역: '경기도',
    상세주소: '경기도 광주시 회안대로 964 (송정동)',
    전화번호: '031-762-1872',
  },
  {
    매장명: '뉴러브골프',
    지역: '경기도',
    상세주소: '고양시 덕양구 덕은동 29 러브골프',
    전화번호: '1522-4199',
  },
  {
    매장명: '미남골프',
    지역: '경기도',
    상세주소: '경기도 의왕시 포일동 672-3 지하1층',
    전화번호: '031-421-1873',
  },
  {
    매장명: '부천 블루샵 ',
    지역: '경기도',
    상세주소: '경기도 부천시 길주로 63, 1층 108호 (상동, 스타팰리스아파트)',
    전화번호: '032-561-5943',
  },
  {
    매장명: '분당 스타골프',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 방아로 2(이매동)',
    전화번호: '031-707-7779',
  },
  {
    매장명: '삼성스포츠',
    지역: '경기도',
    상세주소: '경기도 안산시 상록구 부곡동 624 1층 ',
    전화번호: '031-502-9787',
  },
  {
    매장명: '상동스포츠',
    지역: '경기도',
    상세주소: '경기도 부천시 원미구 조마루로 105번길 8-77',
    전화번호: '032-325-2474',
  },
  {
    매장명: '상동스포츠(상동웅진점)',
    지역: '경기도',
    상세주소:
      '경기도 부천시 조마루로 2, 웅진플레이도시 골프동 지층 상동골프웅진점 ',
    전화번호: '032-322-1182',
  },
  {
    매장명: '서울지피',
    지역: '경기도',
    상세주소: '경기도 고양시 덕양구 중앙로 125 (화전동) ',
    전화번호: '02-3159-1190',
  },
  {
    매장명: '솔트베이',
    지역: '경기도',
    상세주소: '경기도 시흥시 마유로 987 (장곡동) B1층(장곡동, 솔트베이)',
    전화번호: '010-9174-0970',
  },
  {
    매장명: '신세계 (경기점)',
    지역: '경기도',
    상세주소: '경기도 용인시 수지구 죽전동 1285번지 5F 신세계백화점 직영골프샵',
    전화번호: '031-695-1845',
  },
  {
    매장명: '씨피알앤디(조일골프)',
    지역: '경기도',
    상세주소: '경기도 평택시 청룡길 166',
    전화번호: '031-691-0990',
  },
  {
    매장명: '영진골프랜드',
    지역: '경기도',
    상세주소: '경기도 고양시 일산서구 대화동 2030-2 1층',
    전화번호: '031-924-1872',
  },
  {
    매장명: '조아골프 (본점)',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 이매동 249-1 영광빌딩 지층',
    전화번호: '031-705-0075',
  },
  {
    매장명: '중앙골프',
    지역: '경기도',
    상세주소: '경기 의정부시 가능동경민대학교 골프연습장 1층 골프SHOP',
    전화번호: '031-876-6464',
  },
  {
    매장명: '케이에스통상',
    지역: '경기도',
    상세주소: '경기도 남양주시 삼패동 407 - 2',
    전화번호: '031-577-9730',
  },
  {
    매장명: '케이에스통상 덕소골프',
    지역: '경기도',
    상세주소: '경기도 남양주시 와부읍 덕소로2번길 17-32 덕소골프클럽',
    전화번호: '010-4951-4568',
  },
  {
    매장명: '티노파이브 구리점 (싱글로점)',
    지역: '경기도',
    상세주소: '경기도 구리시 교문동 424-1',
    전화번호: '031-569-5315',
  },
  {
    매장명: '티노파이브 구리점(본점)',
    지역: '경기도',
    상세주소: '경기도 구리시 수택동 562-1 구리패션아울렛2층 11',
    전화번호: '031-562-5314',
  },
  {
    매장명: '티노파이브 구리점(의정부점)',
    지역: '경기도',
    상세주소: '경기도 의정부시 신곡동 803-1',
    전화번호: '031-852-8570',
  },
  {
    매장명: '티노파이브 김포(제이콥골프)',
    지역: '경기도',
    상세주소: '경기도 김포시 걸포동 165-7',
    전화번호: '031-983-6377',
  },
  {
    매장명: '티노파이브 일산동구(일산탑골프)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산동구 고양대로 1119번길 6 1층 (식사동)',
    전화번호: '031-968-6018',
  },
  {
    매장명: '티노파이브 일산서구(자유로골프)',
    지역: '경기도',
    상세주소: '경기도 고양시 일산서구 미래로 170 (덕이동) ',
    전화번호: '031-923-7710',
  },
  {
    매장명: '퍼플핀 분당점',
    지역: '경기도',
    상세주소: '경기도 성남시 분당구 대왕판교로 154 (금곡동)',
    전화번호: '031-717-7281',
  },
  {
    매장명: '퍼플핀 현대백화점 중동점',
    지역: '경기도',
    상세주소:
      '경기도 부천시 길주로 180 (중동, 현대백화점 중동점) 6층 퍼플핀 골프샵',
    전화번호: '032-323-7281',
  },
  {
    매장명: '허니 골프',
    지역: '경기도',
    상세주소: '경기도 하남시 하남대로 560 1,2층',
    전화번호: '031-792-5567',
  },
  {
    매장명: 'AK골프 고양점',
    지역: '경기도',
    상세주소:
      '경기도 고양시 덕양구 권율대로420 (도내동) 롯데아울렛 고양점 P2층',
    전화번호: '031-8035-2889 ',
  },
  {
    매장명: 'AK골프 광교점',
    지역: '경기도',
    상세주소: '경기도 수원시 영통구 도청로10 롯데프리미엄 아울렛 2층 AK골프',
    전화번호: '031-8064-2257',
  },
  {
    매장명: 'AK골프 광명점',
    지역: '경기도',
    상세주소:
      '경기도 광명시 일직동500 (일직로17) 광명 롯데 프리미엄아울렛 5층 AK골프',
    전화번호: '02-6226-2761',
  },
  {
    매장명: 'AK골프 구리점',
    지역: '경기도',
    상세주소: '경기도 구리시 경춘로 261, 롯데백화점 구리점 4층 AK골프',
    전화번호: '031-550-7431',
  },
  {
    매장명: 'AK골프 기흥점',
    지역: '경기도',
    상세주소: '경기도 용인시 기흥구 중부대로 391, 1층',
    전화번호: '031-302-3700',
  },
  {
    매장명: 'AK골프 덕소점',
    지역: '경기도',
    상세주소: '경기도 남양주시 경강로 354 (삼패동 , 메가몰2층) AK골프',
    전화번호: '031-576-0667',
  },
  {
    매장명: 'AK골프 동탄점',
    지역: '경기도',
    상세주소: '경기도 화성시 동탄역로 160, 롯데백화점 동탄점 5층',
    전화번호: '031-8036-3924',
  },
  {
    매장명: 'AK골프 부천점',
    지역: '경기도',
    상세주소: '경기도 부천시 옥길로 1, 스타필드시티 부천 3층 3195호',
    전화번호: '02-6386-1327 ',
  },
  {
    매장명: 'AK골프 분당점',
    지역: '경기도',
    상세주소: '경기 성남시 분당구 궁내동 202-1 1층 AK골프매장',
    전화번호: '031-600-8533',
  },
  {
    매장명: 'AK골프 수원점',
    지역: '경기도',
    상세주소: '경기도 수원시 권선구 세화로 134 롯데백화점 수원점 6층 AK골프',
    전화번호: '031-8066-0650',
  },
  {
    매장명: 'AK골프 수지점',
    지역: '경기도',
    상세주소: '경기도 용인시 수지구 성복2로 38, 3층',
    전화번호: '031-5174-4346 ',
  },
  {
    매장명: 'AK골프 안성점',
    지역: '경기도',
    상세주소:
      '경기 안성시 공도읍 서동대로 3930-39 안성스타필드 L2층, 2290호 AK골프',
    전화번호: '031-8092-1668',
  },
  {
    매장명: 'AK골프 양주점',
    지역: '경기도',
    상세주소:
      '경기도 양주시 평화로 1593(회정동 453-19) LF스퀘어 양주점 3층 AK골프',
    전화번호: '031-894-2715',
  },
  {
    매장명: 'AK골프 의왕점',
    지역: '경기도',
    상세주소: '의왕시 학의동 1039 롯데백화점 아울렛타임빌라스 1층 AK골프',
    전화번호: '031-329-0601',
  },
  {
    매장명: 'AK골프 일산점',
    지역: '경기도',
    상세주소: '경기도 고양시 일산서구 덕이동 548번지 1층 AK골프',
    전화번호: '031-925-9871',
  },
  {
    매장명: 'AK골프 중동점',
    지역: '경기도',
    상세주소: '경기도 부천시 길주로 300 롯데백화점 중동점 7층 AK골프',
    전화번호: '032-320-7904',
  },
  {
    매장명: 'AK골프 파주점',
    지역: '경기도',
    상세주소:
      '경기도 파주시 탄현면 필승로 200 파주 프리미엄 아울렛 1430호 AK골프',
    전화번호: '031-8071-7453',
  },
  {
    매장명: 'AK골프 평촌점',
    지역: '경기도',
    상세주소:
      '경기도 안양시 동안구 호계동 1039번지 롯데백화점 평촌점 6층 AK골프',
    전화번호: '031-8086-9603',
  },
  {
    매장명: '고수스포츠 (부평점)',
    지역: '인천광역시',
    상세주소: '인천광역시 부평구 무네미로 487',
    전화번호: '032-508-2040 ',
  },
  {
    매장명: '골프존 마켓(롯데 인천터미널점)',
    지역: '인천광역시',
    상세주소: '인천 미추홀구 연남로 35 롯데백화점 인천터미널점 4층 골프존마켓',
    전화번호: '032-242-2479',
  },
  {
    매장명: '골프존 마켓(인천주안점)',
    지역: '인천광역시',
    상세주소: '인천광역시 남구 주안동 1563-7번지 ',
    전화번호: '032-431-0003',
  },
  {
    매장명: '골프존 마켓(현대아울렛 송도점)',
    지역: '인천광역시',
    상세주소:
      '인천광역시 연수구 송도국제대로 123 현대프리미엄아울렛 송도점 2층',
    전화번호: '032-727-2230',
  },
  {
    매장명: '대아골프 (구월점)',
    지역: '인천광역시',
    상세주소: '인천광역시 남동구 구월동 1115-5',
    전화번호: '032-431-3131',
  },
  {
    매장명: '대아골프 (본점)',
    지역: '인천광역시',
    상세주소: '인천 남동구 고잔동519-4번지 김미현골프월드 2층 골프샵',
    전화번호: '032-578-6807',
  },
  {
    매장명: 'AK골프 송도점',
    지역: '인천광역시',
    상세주소: '인천광역시 연수구 송도과학로 16번길 33-4, D동 B1F-118호',
    전화번호: '032-310-9633',
  },
  {
    매장명: 'AK골프 연수점',
    지역: '인천광역시',
    상세주소: '인천광역시 연수구 청능대로23번길 11, LF스퀘어 연수점 1층',
    전화번호: '032-717-0635',
  },
  {
    매장명: '골프존 마켓(구미점)',
    지역: '경상북도',
    상세주소: '경상북도 구미시 신평동 300-6번지',
    전화번호: '054-461-7009',
  },
  {
    매장명: '골프존 마켓(포항 오광장점)',
    지역: '경상북도',
    상세주소: '경상북도 포항시 남구 대도동 104-8번지',
    전화번호: '054-277-2070',
  },
  {
    매장명: '금오골프',
    지역: '경상북도',
    상세주소: '경상북도 구미시 구미대로 320 (신평동)',
    전화번호: '054-461-1872',
  },
  {
    매장명: '금오골프 (산동점)',
    지역: '경상북도',
    상세주소: '경상북도 구미시 산동읍 강동로 953-8',
    전화번호: '054-474-1872',
  },
  {
    매장명: '초원골프 (구미)',
    지역: '경상북도',
    상세주소: '경상북도 구미시 원평동 1060-16',
    전화번호: '054-457-5877~8',
  },
  {
    매장명: '허니 골프 포항점',
    지역: '경상북도',
    상세주소: '경북 포항시 북구 흥해읍 신덕로 80-78 2층 허니골프 ',
    전화번호: '0507-1387-3357',
  },
  {
    매장명: 'AK골프 구미점',
    지역: '경상북도',
    상세주소: '경북 구미시 신평동 309-3 1층',
    전화번호: '054-604-1300',
  },
  {
    매장명: 'AK골프 포항점',
    지역: '경상북도',
    상세주소: '경상북도 포항시 남구 포스코대로 393(대도동 120-2)',
    전화번호: '054-614-7400',
  },
  {
    매장명: '거제골프',
    지역: '경상남도',
    상세주소: '경상남도 거제시 수양로 454-14 (수월동)',
    전화번호: '055-636-9688',
  },
  {
    매장명: '골프존 마켓(김해롯데 아울렛점)',
    지역: '경상남도',
    상세주소: '경남 김해시 장유면 신문리 72-19 롯데아울렛',
    전화번호: '055-900-2772',
  },
  {
    매장명: '골프존 마켓(양산점)',
    지역: '경상남도',
    상세주소: '경남 양산시 상북면 와곡강변길 6',
    전화번호: '055-374-1820',
  },
  {
    매장명: '골프존 마켓(창원도계점)',
    지역: '경상남도',
    상세주소: '경상남도 창원시 의창구 원이대로 56번길 2-17',
    전화번호: '055-237-2320',
  },
  {
    매장명: '김해 리오스포츠',
    지역: '경상남도',
    상세주소: '경상남도 김해시 김해대로 1970 (구산동)',
    전화번호: '1899-1336',
  },
  {
    매장명: '넘버원골프',
    지역: '경상남도',
    상세주소: '경상남도 진주시 대신로 460(초전동) 넘버원골프',
    전화번호: '055-761-1101',
  },
  {
    매장명: '로데오골프',
    지역: '경상남도',
    상세주소: '경상남도 창원시 성신구 창원대로 840 (외동 제1층 119호,135호)',
    전화번호: '052-266-0808',
  },
  {
    매장명: 'AK골프 거제점',
    지역: '경상남도',
    상세주소: '경상남도 거제시 고현동 976, 1층',
    전화번호: '055-950-0110',
  },
  {
    매장명: 'AK골프 진주갤러리아점',
    지역: '경상남도',
    상세주소: '경상남도 진주시 진주대로 1095, 갤러리아백화점 진주점 4층',
    전화번호: '055-791-1462',
  },
  {
    매장명: 'AK골프 진주점',
    지역: '경상남도',
    상세주소: '경상남도 진주시 충무공동 35번지 롯데몰 3층 AK골프',
    전화번호: '055-791-2301',
  },
  {
    매장명: 'AK골프 창원점',
    지역: '경상남도',
    상세주소: '경상남도 창원시 성산구 용지로 52(중앙동), 1층 AK골프',
    전화번호: '055-601-6800',
  },
  {
    매장명: '골프존 마켓(대구 성서점)',
    지역: '대구광역시',
    상세주소: '대구광역시 달서구 용산동 410-8번지 1층',
    전화번호: '053-592-1221',
  },
  {
    매장명: '골프존 마켓(대구 황금네거리점)',
    지역: '대구광역시',
    상세주소: '대구광역시 수성구 지산동 1053',
    전화번호: '053-766-0370',
  },
  {
    매장명: '골프존 마켓(대구현대아울렛점)',
    지역: '대구광역시',
    상세주소:
      '대구광역시 동구 동대구로 454 현대시티아울렛 대구점 6층 골프존마켓',
    전화번호: '053-430-2350',
  },
  {
    매장명: '골프존 마켓(시지점)',
    지역: '대구광역시',
    상세주소: '대구광역시 수성구 달구벌대로 3261',
    전화번호: '053-761-1380',
  },
  {
    매장명: '명성골프 (롯데대구점)',
    지역: '대구광역시',
    상세주소: '대구광역시 북구 칠성동2가 302-155 롯데백화점 대구점 7층',
    전화번호: '053-660-3517',
  },
  {
    매장명: '명성골프 (수성점)',
    지역: '대구광역시',
    상세주소: '대구광역시 수성구 중동 70-2',
    전화번호: '053-766-5757',
  },
  {
    매장명: '명성골프 본점 (본점)',
    지역: '대구광역시',
    상세주소: '대구광역시 중구 포정동 21-3 경상감영공원앞',
    전화번호: '053-254-2233',
  },
  {
    매장명: '신세계 (동대구점)',
    지역: '대구광역시',
    상세주소: '대구광역시 동구 동부로 149 (2층) 직영골프샵',
    전화번호: '053-661-6262',
  },
  {
    매장명: '신세계골프',
    지역: '대구광역시',
    상세주소: '대구광역시 수성구 들안로 203(중동43-6)',
    전화번호: '053-761-3844',
  },
  {
    매장명: 'AK골프 상인점',
    지역: '대구광역시',
    상세주소: '대구광역시 달서구 월배로 247, 1층',
    전화번호: '053-283-1800',
  },
  {
    매장명: 'AK골프 성서점',
    지역: '대구광역시',
    상세주소: '대구 달서구 이곡동 1000-242 ',
    전화번호: '053-281-5200',
  },
  {
    매장명: 'AK골프 이시아점',
    지역: '대구광역시',
    상세주소:
      '대구광역시 동구 팔공로 49길 16(봉무동 1545)롯데아울렛 이시아폴리스점 2층 AK골프',
    전화번호: '053-945-2633',
  },
  {
    매장명: 'AK골프 황금점',
    지역: '대구광역시',
    상세주소: '대구광역시 수성구 지산동 1000-5, 1층',
    전화번호: '053-242-3700',
  },
  {
    매장명: '골프존 마켓(대전 조이마루점)',
    지역: '대전광역시',
    상세주소: '대전광역시 유성구 도룡동 4-20번지 골프존 조이마루 1층',
    전화번호: '042-862-3008',
  },
  {
    매장명: '골프존 마켓(대전갤러리아점)',
    지역: '대전광역시',
    상세주소: '대전광역시 서구 대덕대로 211, 갤러리아타임월드 7층 골프존마켓',
    전화번호: '042-720-6710',
  },
  {
    매장명: '골프존 마켓(대전현대아울렛점)',
    지역: '대전광역시',
    상세주소:
      '대전광역시 유성구 용산동 579, 현대프리미엄아울렛 대전점 2층 골프존마켓',
    전화번호: '042-332-2612',
  },
  {
    매장명: '골프존 마켓(롯데백화점 대전점)',
    지역: '대전광역시',
    상세주소: '대전광역시 서구 계룡로598 롯데백화점 7층',
    전화번호: '042-601-2782',
  },
  {
    매장명: '골프존 마켓(현대프리미엄아울렛 대전점)',
    지역: '대전광역시',
    상세주소: '대전 유성구 용산동 579 현대프리미엄아울렛 대전점 2층 ',
    전화번호: '010-7474-9713',
  },
  {
    매장명: '신세계 (대전점)',
    지역: '대전광역시',
    상세주소: '대전광역시 유성구 엑스포로 17 (도룡동) 신세계백화점 4층 골프샵',
    전화번호: '010-3671-1848',
  },
  {
    매장명: 'AK골프 둔산점',
    지역: '대전광역시',
    상세주소: '대전광역시 서구 둔산서로 15 (둔산동 1253), 1층',
    전화번호: '042-364-1700',
  },
  {
    매장명: 'AK골프 유성NC점',
    지역: '대전광역시',
    상세주소: '대전광역시 유성구 계룡로 119, NC백화점 유성점 5층',
    전화번호: '042-332-0292',
  },
  {
    매장명: '골프존 마켓(광복롯데점)',
    지역: '부산광역시',
    상세주소: '부산 중구 중앙대로 2 롯데백화점 광복점 아쿠아몰 4층 골프존마켓',
    전화번호: '051-442-2722',
  },
  {
    매장명: '골프존 마켓(동래 롯데점)',
    지역: '부산광역시',
    상세주소: '부산시 동래구 온천동 502-3, 롯데백화점 동래점 6층',
    전화번호: '051-668-4607',
  },
  {
    매장명: '골프존 마켓(명지스타필드점)',
    지역: '부산광역시',
    상세주소:
      '부산광역시 강서구 명지국제6로 168 스타필드시티 명지 1층 골프존마켓',
    전화번호: '051-990-0221',
  },
  {
    매장명: '골프존 마켓(부산 남천점)',
    지역: '부산광역시',
    상세주소: '부산시 수영구 남천동 55-22',
    전화번호: '051-623-3460',
  },
  {
    매장명: '골프존 마켓(부산 해운대점)',
    지역: '부산광역시',
    상세주소: '부산 광역시 해운대구 우동 640-6',
    전화번호: '051-743-1380',
  },
  {
    매장명: '골프존 마켓(부산교대점) ',
    지역: '부산광역시',
    상세주소: '부산 연제구 거제대로 286 1층 골프존마켓 ',
    전화번호: '051-853-1870',
  },
  {
    매장명: '골프존 마켓(부산덕천점)',
    지역: '부산광역시',
    상세주소: '부산 북구 금곡대로 47 골프존마켓 덕천점',
    전화번호: '051-332-0022',
  },
  {
    매장명: '골프존 마켓(부산신세계아울렛점)',
    지역: '부산광역시',
    상세주소: '부산 기장군 장안읍 정관로 1133 HIGH(3층) 336호',
    전화번호: '051-940-1336',
  },
  {
    매장명: '골프존 마켓(센텀시티 롯데점)',
    지역: '부산광역시',
    상세주소: '부산시 해운대구 우동 1496 롯데백화점 센텀시티점 5층',
    전화번호: '051-730-3414',
  },
  {
    매장명: '부산 월드골프프라자',
    지역: '부산광역시',
    상세주소: '부산시 수영구 광안동 203-6 신화빌딩 3층',
    전화번호: '051-628-8981',
  },
  {
    매장명: '신세계 (센텀시티점)',
    지역: '부산광역시',
    상세주소: '부산광역시 해운대구 우동 1495번지 6F 신세계백화점 직영골프샵',
    전화번호: '051-745-1823',
  },
  {
    매장명: '애드파골프㈜ (금정점)',
    지역: '부산광역시',
    상세주소: '부산광역시 금정구 부곡2동 235-19',
    전화번호: '051-538-0063',
  },
  {
    매장명: '애드파골프㈜ (본점)',
    지역: '부산광역시',
    상세주소: '부산광역시 사하구 당리동 321-20',
    전화번호: '051-205-9666',
  },
  {
    매장명: '애드파골프㈜ (센텀점)',
    지역: '부산광역시',
    상세주소: '부산광역시 해운대구 우동 1210-5번지 ',
    전화번호: '051-743-0020',
  },
  {
    매장명: 'AK골프 덕천점',
    지역: '부산광역시',
    상세주소: '부산광역시 북구 덕천동 325-5번지 덕천 굿윌치과병원 건물, 1층',
    전화번호: '051-954-1200',
  },
  {
    매장명: 'AK골프 동래점',
    지역: '부산광역시',
    상세주소: '부산 동래구 안락동 1044-2번지 1층 (동래고등학교옆) AK골프',
    전화번호: '051-939-9100',
  },
  {
    매장명: 'AK골프 동부산점',
    지역: '부산광역시',
    상세주소: '부산 광역시 기장군 기장읍 기장해안로 147번지 2층 B227 AK골프',
    전화번호: '051-901-2561',
  },
  {
    매장명: 'AK골프 서면점',
    지역: '부산광역시',
    상세주소: '부산광역시 부산진구 부전동 롯데백화점 5층 AK골프',
    전화번호: '051-810-3558',
  },
  {
    매장명: 'AK골프 하단점',
    지역: '부산광역시',
    상세주소: '부산시 사하구 하단동 1159-5(을숙도초등학교 옆) AK골프',
    전화번호: '051-271-8886',
  },
  {
    매장명: '갤러리골프 (본점)',
    지역: '울산광역시',
    상세주소: '울산광역시 남구 신정2동 1636-5 금강빌딩 1층',
    전화번호: '052-256-5730',
  },
  {
    매장명: '갤러리골프 (파크점)',
    지역: '울산광역시',
    상세주소:
      '울산 남구 두왕로154번길 17 (선암동) 선암동611 파크에비뉴 2층 파크골프샵',
    전화번호: '010-3568-0990',
  },
  {
    매장명: '갤러리골프 (DF점)',
    지역: '울산광역시',
    상세주소: '울산광역시 남구 번영로 86, 1층(달동)',
    전화번호: '052-256-5730',
  },
  {
    매장명: '골프존 마켓(롯데백화점 울산점)',
    지역: '울산광역시',
    상세주소: '울상광역시 남구 삼산로 288 롯데백화점 7층',
    전화번호: '052-960-4644',
  },
  {
    매장명: '골프존 마켓(울산남구점)',
    지역: '울산광역시',
    상세주소: '울산광역시 남구 신정동 663-8번지',
    전화번호: '052-227-2050',
  },
  {
    매장명: '네오골프',
    지역: '울산광역시',
    상세주소: '울산광역시 북구 천곡동 600-5 네오골프연습장',
    전화번호: '052-288-5577',
  },
  {
    매장명: 'AK골프 울산동구점',
    지역: '울산광역시',
    상세주소:
      '울산광역시 동구 방어진순환도로 899,  현대백화점 울산동구점 B1층 AK골프',
    전화번호: '052-250-4997',
  },
  {
    매장명: 'AK골프 울산점',
    지역: '울산광역시',
    상세주소: '울산 남구 달동 635-7 1층',
    전화번호: '052-958-1300',
  },
  {
    매장명: '골프존 마켓(광주 상무점)',
    지역: '광주광역시',
    상세주소: '광주시 서구 마륵동 167-8',
    전화번호: '062-382-3880',
  },
  {
    매장명: '골프존 마켓(광주수완점)',
    지역: '광주광역시',
    상세주소: '광주 광산구 수완동 1448 골프존마켓 광주수완점',
    전화번호: '062-531-6988',
  },
  {
    매장명: '골프프라자 (본점)',
    지역: '광주광역시',
    상세주소: '광주광역시 서구 치평동 1310-6',
    전화번호: '062-368-7800',
  },
  {
    매장명: '골프프라자 (빛고을점)',
    지역: '광주광역시',
    상세주소: '광주 남구 효우로 153, 빛고을 CC골프연습장내',
    전화번호: '062-672-6611',
  },
  {
    매장명: '골프프라자 (중흥점)',
    지역: '광주광역시',
    상세주소: '광주 서구 풍서좌로 129',
    전화번호: '062-682-1872',
  },
  {
    매장명: '골프프라자 (패미리점)',
    지역: '광주광역시',
    상세주소: '광주광역시 북구 생용동 101 ',
    전화번호: '062-576-1872',
  },
  {
    매장명: '광주 월드골프',
    지역: '광주광역시',
    상세주소: '광주광역시 광산구 수완동 902',
    전화번호: '062-714-1212',
  },
  {
    매장명: '광주 월드골프(북광주연습장점)',
    지역: '광주광역시',
    상세주소: '광주광역시 북구 신용동 637-1',
    전화번호: '062-573-5400',
  },
  {
    매장명: '남도골프 (본점)',
    지역: '광주광역시',
    상세주소: '광주광역시 남구 대남대로 403-1',
    전화번호: '062-673-8118',
  },
  {
    매장명: '신세계 (광주점)',
    지역: '광주광역시',
    상세주소: '광주광역시 서구 광천동 49-1번지 8F 신세계백화점 직영골프샵',
    전화번호: '062-360-1402',
  },
  {
    매장명: 'AK골프 광주월드컵점',
    지역: '광주광역시',
    상세주소:
      '광주광역시 서구 금화로 240 (풍암동 423-2), 롯데몰 광주월드컵점 2층',
    전화번호: '062-606-2599',
  },
  {
    매장명: 'AK골프 수완점',
    지역: '광주광역시',
    상세주소: '광주광역시 광산구 장신로 98, 롯데아울렛 수완점 B관 3층',
    전화번호: '062-616-2797',
  },
  {
    매장명: '골프존 마켓(청주점)',
    지역: '충청북도',
    상세주소: '충청북도 청주시 흥덕구 부모산로 3 1층',
    전화번호: '043-231-9874',
  },
  {
    매장명: '골프존 마켓(충청현대점)',
    지역: '충청북도',
    상세주소: '충청북도 청주시 흥덕구 직지대로 308, 현대백화점 5층 골프존마켓',
    전화번호: '043-909-4549',
  },
  {
    매장명: '골프존 마켓(현대충청점)',
    지역: '충청북도',
    상세주소:
      '충청북도 청주시 흥덕구 직지대로 308 (복대동) 현대백화점 충청점 5층 골프존마켓',
    전화번호: '010-3614-8531',
  },
  {
    매장명: '마스터골프',
    지역: '충청북도',
    상세주소: '충청북도 청주시 흥덕구 월명로 277,지하(송절동)',
    전화번호: '043-218-0365',
  },
  {
    매장명: '우리 라마다 골프',
    지역: '충청북도',
    상세주소: '청주시 상당구 율량동 1073번지 라마다골프',
    전화번호: '043-905-9054',
  },
  {
    매장명: '퍼플핀 킹즈락CC 프로샵',
    지역: '충청북도',
    상세주소:
      '충청북도 제천시 내토로7길 136 (천남동) 킹즈락CC 프로샵 (구.힐데스하임CC)',
    전화번호: '010-2061-7756',
  },
  {
    매장명: 'AK골프 청주점',
    지역: '충청북도',
    상세주소:
      '충청북도 청주시 흥덕구 2순환로 1004(비하동), 롯데아울렛 청주점 3층',
    전화번호: '043-717-2930',
  },
  {
    매장명: '골프존 마켓(부여롯데)',
    지역: '충청남도',
    상세주소:
      '충청남도 부여군 규암면 백제문로 387, 롯데프리미엄아울렛 부여점 2층 골프존마켓',
    전화번호: '010-3614-8531',
  },
  {
    매장명: '골프존 마켓(부여롯데아울렛점)',
    지역: '충청남도',
    상세주소:
      '충청남도 부여군 규암면 백제문로 387 롯데프리미엄아울렛 부여점 2층 골프존마켓',
    전화번호: '041-435-2599',
  },
  {
    매장명: '골프존 마켓(천안동남점)',
    지역: '충청남도',
    상세주소: '충남 천안시 동남구 충무로 56 신원빌딩 2층',
    전화번호: '041-576-3350',
  },
  {
    매장명: '골프존 마켓(천안불당점)',
    지역: '충청남도',
    상세주소: '충청남도 천안시 서북구 음봉로 909-5번지 1층 골프존마켓',
    전화번호: '041-566-2990',
  },
  {
    매장명: '골프존 마켓(천안서북점)',
    지역: '충청남도',
    상세주소: '충남 천안시 서북구 백석동 148-2 2층',
    전화번호: '041-552-3320',
  },
  {
    매장명: '씨피알앤디(파인허스트점)',
    지역: '충청남도',
    상세주소: '충청남도 아산시 음봉로 52-38',
    전화번호: '010-9400-4219',
  },
  {
    매장명: '천안 ABC',
    지역: '충청남도',
    상세주소:
      '충청남도 천안시 서북구 서부대로 668 (성정동) 1245-1 2층 외 1필지',
    전화번호: '1644-1023',
  },
  {
    매장명: '천안케이제이',
    지역: '충청남도',
    상세주소: '충청남도 천안시 동남구 서부대로 546, 1층(봉명동)',
    전화번호: '041-572-9001',
  },
  {
    매장명: 'AK골프 서북점',
    지역: '충청남도',
    상세주소: '충남 천안시 서북구 성정동 441-11 1층, AK골프',
    전화번호: '041-902-1300',
  },
  {
    매장명: 'AK골프 천안갤러리아점',
    지역: '충청남도',
    상세주소: '충청남도 천안시 서북구 공원로 227, 갤러리아 센터시티 5층',
    전화번호: '041-412-9501',
  },
  {
    매장명: '골프존 마켓(전주점)',
    지역: '전라북도',
    상세주소: '전북 전주시 완산구 세내로 257 골프존마켓 전주점',
    전화번호: '063-224-9080',
  },
  {
    매장명: '국제스포츠 전주',
    지역: '전라북도',
    상세주소: '전라북도 전주시 덕진구 백제대로 806',
    전화번호: '063-242-5333',
  },
  {
    매장명: '익산우리골프',
    지역: '전라북도',
    상세주소: '전라북도 익산시 고봉로18길 14(영등동)',
    전화번호: '063-837-7782',
  },
  {
    매장명: '전주 마스터골프',
    지역: '전라북도',
    상세주소: '전라북도 전주시 완산구 서신동 838-2',
    전화번호: '063-273-5406',
  },
  {
    매장명: '㈜국제스포츠여수지점(본점)',
    지역: '전라남도',
    상세주소: '전남 여수시 무선로 205 (화장동 798-3) 4층',
    전화번호: '061-682-0901',
  },
  {
    매장명: '골프스카이',
    지역: '전라남도',
    상세주소: '전라남도 목포시 평화로 132 옥암동 1099-8',
    전화번호: '061-282-9600',
  },
  {
    매장명: '남도골프 (본점)',
    지역: '전라남도',
    상세주소: '전남 순천시 해룡면 신대4길 4-57 107호 남도골프',
    전화번호: '061-725-4300',
  },
  {
    매장명: 'AK골프 광양점',
    지역: '전라남도',
    상세주소: '전남 광양시 광양읍 순광로 466  LF광양점 2층 AK골프',
    전화번호: '061-815-4700',
  },
  {
    매장명: 'AK골프 남악점',
    지역: '전라남도',
    상세주소:
      '전라남도 무안군 삼향읍 남악리 2622(남악중앙시장근처 롯데몰 2F) AK골프',
    전화번호: '061-801-2215',
  },
  {
    매장명: 'AK골프 여수점',
    지역: '전라남도',
    상세주소: '전라남도 여수시 국포1로 36, 롯데몰 여수점 3층',
    전화번호: '061-689-2410 ',
  },
  {
    매장명: '㈜강원골프(라온점)',
    지역: '강원도',
    상세주소: '강원도 강원도 원주시 무실동 산 127-5 2층',
    전화번호: '033-762-0741',
  },
  {
    매장명: '㈜강원골프(본점)',
    지역: '강원도',
    상세주소: '강원도 원주시 서원대로 442 (단구동,가동 1,2층)',
    전화번호: '033-731-2178',
  },
  {
    매장명: '골프존 마켓(원주점)',
    지역: '강원도',
    상세주소: '강원도 원주시 로아노크로57 1층, 골프존마켓',
    전화번호: '033-748-8101',
  },
  {
    매장명: '주식회사 더 페어웨이',
    지역: '강원도',
    상세주소: '강원도 강릉시 경강로 1849 (홍제동  482-1번지)',
    전화번호: '033-641-7021',
  },
  {
    매장명: '골프존 마켓(제주신세계아울렛점)',
    지역: '제주도',
    상세주소: '제주 서귀포시 안덕면 신화역사로 304번길 38, 지하2층 227호',
    전화번호: '064-907-1427',
  },
  {
    매장명: '제주 메리언',
    지역: '제주도',
    상세주소: '제주특별자치도 제주시 노형3길 5 (노형동)',
    전화번호: '064-743-0033',
  },
  {
    매장명: '제주스포츠',
    지역: '제주도',
    상세주소: '제주특별자치도 제주시 도남동 1042-1',
    전화번호: '064-753-9700',
  },
  {
    매장명: '세종필드',
    지역: '세종특별시',
    상세주소:
      '세종특별자치시 연기면 눌왕새터말길 3 (연기면) 1층 세종필드골프연습장',
    전화번호: '044-862-0327',
  },
];