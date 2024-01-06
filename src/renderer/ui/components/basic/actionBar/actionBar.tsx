/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import { ActionBarProps, ActionBarViewModelHook } from '@/ui/components/basic/actionBar/actionBarViewModel';
import clsx from 'clsx';
import styles from './actionBar.module.scss';
import { Button } from '@/ui/components/basic/button';

type Deps = {
  useActionBarViewModel: ActionBarViewModelHook;
}

export function createActionBarComponent({
  useActionBarViewModel,
}: Deps) {
  function Component(props: ActionBarProps) {
    const {
      actionBarItems,
      onActionBarItemClick,
      className
    } = useActionBarViewModel(props);

    return (
      actionBarItems.length>0 &&
      <ul
        role="toolbar"
        className={clsx(
          styles['action-bar'],
          className
        )}
      >
      {actionBarItems.map(item => (
        <li
          role="presentation"
          key={item.id}
          className={styles['action-bar-item']}
        >
          <Button
            iconSvg={item.icon}
            size='S'
            title={item.title}
            disabled={!item.enabled}
            onClick={() => onActionBarItemClick(item.id)}
            pressed={item.pressed}
          ></Button>
        </li>
      ))}
      </ul>
    )
  }

  return Component;
}

export type ActionBarComponent = ReturnType<typeof createActionBarComponent>;

