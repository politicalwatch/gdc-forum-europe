import { useState, useEffect } from 'react';
import cn from 'classnames';

import Form from './form';
import styles from './registration-tabs.module.css';
import styleUtils from './utils.module.css';

function RegistrationTabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com.ar/static/widgets/eb_widgets.js';
    script.onload = handleScriptLoad;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScriptLoad = () => {
    const exampleCallback = function () {
      console.log('¡Pedido completado!');
    };

    if (widgetLoaded) return;
    // @ts-ignore
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '844642066157',
      iframeContainerId: 'eventbrite-widget-container-844642066157',
      iframeContainerHeight: 425,
      onOrderComplete: exampleCallback
    });
    setWidgetLoaded(true);
  };

  return (
    <div>
      <div
        className={cn(
          styles['registration-tab__tabs'],
          styleUtils['appear'],
          styleUtils['appear-fourth']
        )}
      >
        <button
          className={cn(styles['registration-tab__tab'], {
            [styles.active]: activeTab === 'tab1'
          })}
          onClick={() => {
            setActiveTab('tab1');
            setAnimationCompleted(true);
          }}
        >
          I want to attend online
        </button>
        <button
          className={cn(styles['registration-tab__tab'], {
            [styles.active]: activeTab === 'tab2'
          })}
          onClick={() => {
            setActiveTab('tab2');
            setAnimationCompleted(true);
          }}
        >
          I want to attend in person
        </button>
      </div>
      <div
        className={cn(styles['registration-tab__content'], {
          [styles.active]: activeTab === 'tab1'
        })}
      >
        <Form animationCompleted={animationCompleted} />
      </div>
      <div
        className={cn(styles['registration-tab__content'], {
          [styles.active]: activeTab === 'tab2'
        })}
      >
        <div
          id="eventbrite-widget-container-844642066157"
          className={cn(styleUtils['appear'], styleUtils['appear-first'])}
        ></div>
      </div>
    </div>
  );
}

export default RegistrationTabs;
