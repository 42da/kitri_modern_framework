/* root 컴포넌트 */
/* 
모든 컴포넌트는 계층 구조로 존재해야함
App 컴포넌트를 제외한 컴포넌트는 App 컴포넌트에 선언되어야함
*/
import './App.css';
import ShopBreadcrumb from './components/ShopBreadcrumb';
import ShopHeader from './components/ShopHeader';
import ShopContent from './components/ShopContent';

function App() {
  //const myName = "Chung Gi Pyeong";
  
  // 원본 데이터 : state, 자식에게 넘겨주는 데이터 : props
  const menus = ['Videos to rent', 'Videos to buy', 'Used DVDs', 'Offers', ]; // 마지막에 , 찍는게 좋다고 함.
  const desc = '우리 프론트엔드 삼대장 몰에 오신것을 환영합니다요';
  return (    // react 는 root 태그가 하나여야함.(아래 예시처럼 div로 감싼형태)
              /*
              <div></div>
              <div></div>
              이렇게 리턴되면 안됨.
              그런데 이렇게 하면 뎁스가 너무 깊어질 수 있으므로
              <>
                <div></div>
                <div></div>
              </>
              이런 방식 사용
               */ 
              /* 컴포넌트를 포함하는 컴포넌트를 컨테이너라고 함.
                 일반적으로 컨테이너에서 데이터를 자식 컴포넌트에 나눠줌 -> ShopHeader 컴포넌트에 데이터를 주입한다(입력한다) -> props(props 는 복사본, read only)
                 props 는 아버지가 자식에게 줘야함!(props drilling)
              */
              // 최소 하나의 태그는 리턴되어야함.
    <>
      <ShopHeader menuItems={menus}/>
      <ShopBreadcrumb/>
      <ShopContent desc={desc}/>
    </>
  );
}

export default App;
