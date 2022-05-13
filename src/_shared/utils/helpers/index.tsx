import { Action } from '../../../redux/types';
import { get } from 'lodash';
import { COLOR_LIST_ALPHA } from '../../constants';
import { notification, Tag } from 'antd';


export const classname = (classes: Record<string, boolean>) => {
  return Object.keys(classes)
    .filter((clsKey) => classes[clsKey])
    .join(' ');
};

export function getNewLoadingState(
  currentState: Record<string, any> = {},
  action: Action,
  value: any
) {
  const { key } = action;
  return Object.assign({}, currentState, {
    uiLoaders: { ...currentState.uiLoaders, [key]: value },
  });
}

export const arrayToById = (array: any[] = [], key = '_id') => {
  return array.reduce((accumulator, currentObject) => {
    accumulator[get(currentObject, key)] = currentObject;
    return accumulator;
  }, {});
};

export const getRandomColorByString = (name: string) => {
  name = name?.toUpperCase();
  return get(COLOR_LIST_ALPHA, name?.charAt(0) ?? 'A') ?? '#7b68ed';
};

export const onBeforeImageUpload = (file: any, size = 2) => {
  const imageTypes = [
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/jpg',
    'model/gltf-binary',
    'model/gltf+json',
  ];
  const isJpgOrPng = imageTypes.includes(file.type);
  if (!isJpgOrPng) {
    notification.error({
      message: 'Only images are allowed',
      placement: 'bottomLeft',
      duration: 4,
    });
    return isJpgOrPng;
  }
  const isLessThanSize = file.size / 1024 / 1024 < Number(size.toFixed(0));
  if (!isLessThanSize) {
    notification.error({
      message: `File must smaller than ${size.toFixed(0)}MB!`,
      placement: 'bottomLeft',
      duration: 4,
    });
    return isLessThanSize;
  }
  return true;
};

export const tagRender = (props: any) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3, display: 'flex' }}
    >
      {label}
    </Tag>
  );
};



export const normalizeFileUpload = (e: any) => {
  // console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }

  return e && get(e.file, 'response.data.file.url');
};

export const copyToClipboard = (text: string) => {
  if (
    navigator?.permissions &&
    navigator?.permissions?.query &&
    navigator.clipboard
  ) {
    navigator.permissions
      .query({ name: 'clipboard-write' } as unknown as PermissionDescriptor)
      .then((result) => {
        if (result.state == 'granted' || result.state == 'prompt') {
          navigator.clipboard.writeText(text).then(
            function () {
              notification.success({
                message: 'Copied to clipboard',
                placement: 'bottomLeft',
                duration: 4,
              });
            },
            function () {
              console.log('Failed to set clipboard');
            }
          );
        }
      });
    return;
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      function () {
        notification.success({
          message: 'Copied to clipboard',
          placement: 'bottomLeft',
          duration: 4,
        });
      },
      function () {
        console.log('Failed to set clipboard');
      }
    );
    return;
  }

  // Fallback if no clipboard support
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  notification.success({
    message: 'Copied to clipboard',
    placement: 'bottomLeft',
    duration: 4,
  });
  document.body.removeChild(textArea);
};

/**
 * Popup Container for ant design modals and popovers
 */
export const getPopupContainer = () => {
  const element = document.createElement('div');
  element.style.position = 'fixed';
  element.style.top = '0';
  element.style.zIndex = '999';
  document.body.appendChild(element);
  return element;
};

// export const dynCryptoIconImport = (name: string) => {
//   try {
//     const Component = dynamic<HTMLAttributes<SVGElement>>(
//       () =>
//         import(
//           `node_modules/cryptocurrency-icons/svg/white/${toLower(name)}.svg`
//         ),
//       { ssr: true }
//     );
//
//     return (
//       <div className={'h-100 meta-flex meta-align-center meta-flex-j-c'}>
//         <Component height={20} width={20} viewBox={'0 0 32 32'} />
//       </div>
//     );
//   } catch (e) {
//     return null;
//   }
// };

/**
 * Cleans up text input to remove all non-numeric characters
 * @param value
 */
export function cleanInput(value: string) {
  return (
    String(value)
      ?.replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1') || ''
  );
}

export const debugLog = (name = 'Debug Log', type = 'log') => {
  return function (...args: any[]) {
    const color = type === 'log' ? '#3ec570' : '#f44336';
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `%c${name}`,
        `font-size: 16px; color: ${color}; font-weight: bold;`,
        ...args
      );
    }
  };
};

export const isURI = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch (e) {
    return false;
  }
};
