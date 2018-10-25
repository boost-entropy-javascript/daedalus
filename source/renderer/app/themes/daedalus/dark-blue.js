//  ==== react-polymorph: theme config === //
// AUTOCOMPLETE
const rpAutocomplete = {
  '--rp-autocomplete-bg-color': '#263345',
  '--rp-autocomplete-border': '1px solid rgba(102, 122, 138, 0.3)',
  '--rp-autocomplete-border-focus-color': '#667a8a',
  '--rp-autocomplete-placeholder-color': '#8793a1',
  '--rp-autocomplete-search-color': '#e9f4fe',
  '--rp-autocomplete-selected-word-text-color': '#fafbfc',
  '--rp-autocomplete-selected-word-box-background-color': 'rgba(83, 99, 112, 0.5)',
  '--rp-autocomplete-selected-words-font-family': 'NotoSans-Regular, NotoSansCJKjp-Regular',
};

// BUBBLE
const rpBubble = {
  '--rp-bubble-bg-color': '#263345',
  '--rp-bubble-border-color': '#667a8a',
  '--rp-bubble-border-radius': '2px',
};

// BUTTON
const rpButton = {
  '--rp-button-bg-color-active': '#495863',
  '--rp-button-bg-color-disabled': 'rgba(233, 244, 254, 0.5)',
  '--rp-button-bg-color-hover': '#667a8a',
  '--rp-button-bg-color-primary': '#536370',
  '--rp-button-font-family': 'NotoSans-Medium, NotoSansCJKjp-Medium',
  '--rp-button-text-color': '#e9f4fe',
};

// CHECKBOX
const rpCheckbox = {
  '--rp-checkbox-border-disabled-color': 'rgba(83, 99, 112, 0.4)',
  '--rp-checkbox-label-disabled-color': 'rgba(233, 244, 254, 0.3)',
};

// COLORS
const rpColors = {
  '--rp-theme-color-error': '#ea4c5b',
};

// FONTS
const rpFonts = {
  '--rp-font-thin': 'NotoSans-Thin, NotoSansCJKjp-Thin',
  '--rp-font-light': 'NotoSans-Light, NotoSansCJKjp-Light',
  '--rp-font-medium': 'NotoSans-Medium, NotoSansCJKjp-Medium',
  '--rp-font-regular': 'NotoSans-Regular, NotoSansCJKjp-Regular',
  '--rp-font-bold': 'NotoSans-Bold, NotoSansCJKjp-Bold',
};

// FORMFIELD
const rpFormfield = {
  '--rp-formfield-disabled-background-color': 'none',
  '--rp-formfield-disabled-label-color': '#e9f4fe',
  '--rp-formfield-error-color': '#ea4c5b',
  '--rp-formfield-label-color': '#e9f4fe',
};

// INPUT
const rpInput = {
  '--rp-input-background-color': '#263345',
  '--rp-input-border-color': 'rgba(102, 122, 138, 0.3)',
  '--rp-input-disabled-background-color': 'rgba(135, 147, 161, 0.1)',
  '--rp-input-disabled-border-color': 'rgba(135, 147, 161, 0.1)',
  '--rp-input-disabled-placeholder-color': '#8793a1',
  '--rp-input-error-color': '#ea4c5b',
  '--rp-input-focus-border-color': '#667a8a',
  '--rp-input-placeholder-color': '#8793a1',
  '--rp-input-text-color': '#e9f4fe',
};

// MODAL
const rpModal = {
  '--rp-modal-bg-color': '#263345',
  '--rp-modal-overlay-color': 'rgba(0, 0, 0, 0.4)',
};

// OPTIONS
const rpOptions = {
  '--rp-option-bg-color': '#263345',
  '--rp-option-border-color': '#667a8a',
  '--rp-option-checkmark-color': '#fff',
  '--rp-option-font-color': '#e9f4fe',
  '--rp-option-highlight-color': '#536370',
  '--rp-options-border-color': '#667a8a',
  '--rp-options-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1)',
};

// SELECT
const rpSelect = {
  '--rp-select-arrow-color': '#606d7b',
  '--rp-select-arrow-color-open': '#e9f4fe',
  '--rp-select-background-color': '#263345',
  '--rp-select-input-border-focus-color': '#667a8a',
};

// SWITCH
const rpSwitch = {
  '--rp-switch-label-color': '#e9f4fe',
  '--rp-switch-off-accent-color': '#536370',
  '--rp-switch-on-accent-color': '#536370',
  '--rp-switch-thumb-accent-color': '#fff',
};

// TEXTAREA
const rpTextArea = {
  '--rp-textarea-bg-color': '#263345',
  '--rp-textarea-border': '1px solid rgba(102, 122, 138, 0.3)',
  '--rp-textarea-border-focus-color': '#667a8a',
  '--rp-textarea-color': '#e9f4fe',
  '--rp-textarea-disabled-bg-color': 'rgba(135, 147, 161, 0.1)',
  '--rp-textarea-disabled-border-color': 'rgba(135, 147, 161, 0.1)',
  '--rp-textarea-error-color': '#ea4c5b',
  '--rp-textarea-placeholder-color': '#8793a1',
};

const rpDarkBlueTheme = {
  ...rpAutocomplete,
  ...rpBubble,
  ...rpButton,
  ...rpCheckbox,
  ...rpColors,
  ...rpFonts,
  ...rpFormfield,
  ...rpInput,
  ...rpModal,
  ...rpOptions,
  ...rpSelect,
  ...rpSwitch,
  ...rpTextArea,
};

//  ==== Theme: Dark blue === //
export default {
  ...rpDarkBlueTheme,
  '--preferred-font': '"Times New Roman", serif',

  '--font-ultralight': 'NotoSans-ExtraLight, NotoSansCJKjp-Thin',
  '--font-thin': 'NotoSans-Thin, NotoSansCJKjp-Thin',
  '--font-light': 'NotoSans-Light, NotoSansCJKjp-Light',
  '--font-regular': 'NotoSans-Regular, NotoSansCJKjp-Regular',
  '--font-medium': 'NotoSans-Medium, NotoSansCJKjp-Medium',
  '--font-semibold': 'NotoSans-SemiBold, NotoSansCJKjp-Medium',
  '--font-bold': 'NotoSans-Bold, NotoSansCJKjp-Bold',
  '--font-heavy': 'NotoSans-ExtraBold, NotoSansCJKjp-Black',
  '--font-black': 'NotoSans-Black, NotoSansCJKjp-Black',

  '--theme-input-hint-font': 'NotoSans-Regular, NotoSansCJKjp-Regular',

  '--theme-scrollbar-thumb-background': '#536370',

  '--theme-ada-redemption-headline-color': '#e9f4fe',
  '--theme-ada-redemption-instructions-color': '#e9f4fe',
  '--theme-ada-redemption-success-overlay-background-color': 'rgba(38, 51, 69, 0.88)',
  '--theme-ada-redemption-success-overlay-border-color': '#fafbfc',
  '--theme-ada-redemption-success-overlay-message-color': '#e9f4fe',
  '--theme-ada-redemption-success-overlay-button-text-color': '#e9f4fe',
  '--theme-ada-redemption-success-overlay-button-text-color-hover': '#263345',
  '--theme-ada-redemption-success-overlay-button-background-color-hover': '#e9f4fe',
  '--theme-ada-redemption-disclaimer-background-color': 'rgba(171, 23, 0, 0.94)',
  '--theme-ada-redemption-disclaimer-text-color': '#fafbfc',
  '--theme-ada-redemption-disclaimer-checkbox-color-check': '#fafbfc',
  '--theme-ada-redemption-disclaimer-checkbox-color-checked': '#fafbfc',
  '--theme-ada-redemption-disclaimer-checkbox-color-after': '#ab1700',
  '--theme-ada-redemption-disclaimer-checkbox-label-color': '#fafbfc',
  '--theme-ada-redemption-disclaimer-button-border-color': '#fafbfc',
  '--theme-ada-redemption-no-wallets-instructions-color': '#e9f4fe',

  '--theme-autocomplete-bg-color': '#263345',
  '--theme-autocomplete-border': '1px solid rgba(102, 122, 138, 0.3)',
  '--theme-autocomplete-border-focus-color': '#667a8a',
  '--theme-autocomplete-placeholder-color': '#8793a1',
  '--theme-autocomplete-search-color': '#e9f4fe',
  '--theme-autocomplete-selected-word-text-color': '#fafbfc',
  '--theme-autocomplete-selected-word-box-background-color': 'rgba(83, 99, 112, 0.5)',
  '--theme-autocomplete-suggestions-list-border-color': '#667a8a',
  '--theme-autocomplete-suggestions-list-item-bg-color': '#263345',
  '--theme-autocomplete-suggestions-list-item-font-color': '#e9f4fe',
  '--theme-autocomplete-suggestions-list-item-highlight-color': '#536370',

  '--theme-bordered-box-background-color': '#263345',
  '--theme-bordered-box-border': 'none',
  '--theme-bordered-box-text-color': '#e9f4fe',

  '--theme-button-primary-background-color': '#536370',
  '--theme-button-primary-background-color-hover': '#667a8a',
  '--theme-button-primary-background-color-active': '#495863',
  '--theme-button-primary-background-color-disabled': 'rgba(83, 99, 112, 0.3)',
  '--theme-button-primary-text-color-disabled': 'rgba(233, 244, 254, 0.5)',
  '--theme-button-primary-text-color': '#e9f4fe',
  '--theme-button-primary-outline-color': '#667a8a',

  '--theme-button-flat-background-color': 'rgba(83, 99, 112, 0.3)',
  '--theme-button-flat-background-color-hover': 'rgba(102, 122, 138, 0.3)',
  '--theme-button-flat-background-color-active': 'rgba(73, 88, 99, 0.3)',
  '--theme-button-flat-background-color-disabled': 'rgba(83, 99, 112, 0.1)',
  '--theme-button-flat-text-color-disabled': 'rgba(233, 244, 254, 0.3)',
  '--theme-button-flat-text-color': '#e9f4fe',
  '--theme-button-flat-outline-color': 'rgba(102,122,138, 0.3)',

  '--theme-button-attention-background-color': '#ea4c5b',
  '--theme-button-attention-background-color-hover': '#ec5d6b',
  '--theme-button-attention-background-color-active': '#d34452',
  '--theme-button-attention-background-color-disabled': 'rgba(234, 76, 91, 0.3)',
  '--theme-button-attention-text-color-disabled': '#fafbfc',
  '--theme-button-attention-text-color': '#fafbfc',
  '--theme-button-attention-outline-color': '#ff707e',

  '--theme-button-disclaimer-background-color': '#ab1700',
  '--theme-button-disclaimer-background-color-hover': '#fafbfc',
  '--theme-button-disclaimer-background-color-active': '#fafbfc',
  '--theme-button-disclaimer-background-color-disabled': 'rgba(171, 23, 0, .3)',
  '--theme-button-disclaimer-text-color-disabled': 'rgba(250, 251, 252, .3)',
  '--theme-button-disclaimer-text-color': '#fafbfc',
  '--theme-button-disclaimer-outline-color': 'rgba(250, 251, 252, .3)',
  '--theme-button-disclaimer-border-color': '#fafbfc',
  '--theme-button-disclaimer-border-color-disabled': 'rgba(250, 251, 252, .3)',

  '--theme-checkbox-label-color': '#e9f4fe',
  '--theme-checkbox-label-disabled-color': 'rgba(233, 244, 254, 0.3)',
  '--theme-checkbox-border-color': '#536370',
  '--theme-checkbox-border-disabled-color': 'rgba(83, 99, 112, 0.4)',
  '--theme-checkbox-background-color-checked': '#536370',

  '--theme-select-arrow-color': '#606d7b',
  '--theme-select-arrow-color-open': '#e9f4fe',
  '--theme-select-background-color': '#263345',
  '--theme-select-option-highlight-color': '#536370',
  '--theme-select-option-text-color': '#e9f4fe',
  '--theme-select-options-border-color': '#667a8a',
  '--theme-select-options-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.1)',
  '--theme-select-options-checkmark-color': '#fff',

  '--theme-choice-tabs-text-color': '#e9f4fe',
  '--theme-choice-tabs-text-color-active': '#e9f4fe',
  '--theme-choice-tabs-bottom-border-color-active': '#e9f4fe',

  '--theme-dialog-choice-tabs-text-color': '#e9f4fe',
  '--theme-dialog-choice-tabs-text-color-active': '#e9f4fe',
  '--theme-dialog-choice-tabs-bottom-border-color-active': '#e9f4fe',
  '--theme-dialog-big-button-background-color': '#536370',
  '--theme-dialog-big-button-border-color': '#536370',
  '--theme-dialog-big-button-label-color': '#e9f4fe',
  '--theme-dialog-big-button-description-color': 'rgba(233, 244, 254, 0.6)',
  '--theme-dialog-title-color': '#e9f4fe',

  '--theme-input-border-color': 'rgba(102, 122, 138, 0.3)',
  '--theme-input-label-color': '#e9f4fe',
  '--theme-input-text-color': '#e9f4fe',
  '--theme-input-right-floating-text-color': 'rgba(233, 244, 254, 0.5)',
  '--theme-input-placeholder-color': '#8793a1',
  '--theme-input-error-color': '#ea4c5b',
  '--theme-input-remove-color-dark': '#d34452',
  '--theme-input-remove-color-light': '#ea4c5b',
  '--theme-input-remove-color-lighter': '#ec5d6b',
  '--theme-input-remove-color-lightest': '#393546',
  '--theme-input-background-color': '#263345',
  '--theme-input-disabled-background-color': 'rgba(135, 147, 161, 0.1)',
  '--theme-input-disabled-border-color': 'rgba(135, 147, 161, 0.1)',
  '--theme-input-focus-border-color': '#667a8a',

  '--theme-main-body-background-color': '#0b1926',
  '--theme-main-body-messages-color': '#e9f4fe',

  '--theme-modal-overlay-background-color': 'rgba(0, 0, 0, 0.4)',
  '--theme-modal-background-color': '#263345',

  '--theme-nav-item-background-color': '#263345',
  '--theme-nav-item-background-color-hover': 'rgba(83, 99, 112, 0.1)',
  '--theme-nav-item-background-color-active': '#536370',
  '--theme-nav-item-text-color': '#9ba6b3',
  '--theme-nav-item-text-color-active': '#e9f4fe',

  '--theme-node-update-background-color': '#536370',
  '--theme-node-update-title-color': '#e9f4fe',
  '--theme-node-update-message-color': '#e9f4fe',
  '--theme-node-sync-info-message-background-color': '#536370',
  '--theme-node-sync-info-message-text-color': '#e9f4fe',
  '--theme-node-update-accept-button-background-color': '#263345',
  '--theme-node-update-accept-button-background-color-hover': '#34465e',
  '--theme-node-update-accept-button-background-color-active': '#18202b',
  '--theme-node-update-deny-button-background-color': 'rgba(38, 51, 69, 0.3)',
  '--theme-node-update-deny-button-background-color-hover': 'rgba(52, 70, 94, 0.3)',
  '--theme-node-update-deny-button-background-color-active': 'rgba(24, 32, 43, 0.3)',
  '--theme-node-update-button-text-color': '#fafbfc',

  '--theme-notification-message-background-color': 'rgba(83, 99, 112, 0.8)',
  '--theme-notification-message-text-color': '#fafbfc',

  '--theme-receive-qr-code-background-color': '#fff',
  '--theme-receive-qr-code-foreground-color': '#000',

  '--theme-send-confirmation-dialog-send-values-color': '#ea4c5b',

  '--theme-paper-wallet-create-certificate-dialog-recovery-phrase-background-color': 'rgba(233, 244, 254, 0.05)',
  '--theme-paper-wallet-create-certificate-dialog-explorer-link-color': '#e9f4fe',
  '--theme-paper-wallet-create-certificate-dialog-explorer-link-background-color': 'rgba(233, 244, 254, 0.05)',

  '--theme-settings-body-background-color': '#0b1926',
  '--theme-settings-pane-background-color': '#263345',
  '--theme-settings-pane-border': 'none',
  '--theme-settings-menu-box-background-color': '#263345',
  '--theme-settings-menu-box-border': 'none',
  '--theme-settings-menu-item-text-color': '#cecfd1',
  '--theme-settings-menu-item-text-color-active': '#cecfd1',
  '--theme-settings-menu-item-text-color-disabled': '#7a8691',
  '--theme-settings-menu-item-background-color-active': '#536370',
  '--theme-settings-menu-item-left-border-color-active': '#0b1926',
  '--theme-settings-theme-select-title-color': '#cecfd1',

  '--theme-sidebar-background-color': '#314259',
  '--theme-sidebar-category-background-color-hover': 'rgba(38, 51, 69, 0.5)',
  '--theme-sidebar-category-background-color-active': '#263345',
  '--theme-sidebar-category-text-color': '#e9f4fe',
  '--theme-sidebar-menu-background-color': '#263345',
  '--theme-sidebar-menu-item-background-color-hover': 'rgba(27, 36, 48, 0.5)',
  '--theme-sidebar-menu-item-background-color-active': '#1b2430',
  '--theme-sidebar-menu-item-wallet-name-color': '#e9f4fe',
  '--theme-sidebar-menu-item-wallet-info-color': '#bdc0c1',
  '--theme-sidebar-menu-add-button-background-color': '#1b2430',
  '--theme-sidebar-menu-add-button-background-color-active': '#1f2a38',
  '--theme-sidebar-menu-add-button-background-color-hover': '#1f2a38',
  '--theme-sidebar-menu-add-button-text-color': '#e9f4fe',

  '--theme-staking-background-color': '#0b1926',
  '--theme-staking-content-background-color': '#263345',
  '--theme-staking-content-border-color': '#263345',
  '--theme-staking-font-color-accent': '#cecfd1',
  '--theme-staking-font-color-regular': '#0b1926',

  '--theme-switch-background-color': '#536370',
  '--theme-switch-background-color-checked': '#536370',
  '--theme-switch-thumb-color-checked': '#fff',
  '--theme-switch-label-color': '#e9f4fe',

  '--theme-system-error-overlay-attention-icon-color': '#fafbfc',
  '--theme-system-error-overlay-background-color': 'rgba(171, 23, 0, 0.94)',
  '--theme-system-error-overlay-text-color': '#fafbfc',

  '--theme-test-environment-label-background-color': '#ab1700',
  '--theme-test-environment-label-text-color': '#fafbfc',

  '--theme-topbar-background-color': '#263345',
  '--theme-topbar-wallet-name-color': '#e9f4fe',
  '--theme-topbar-wallet-info-color': '#e9f4fe',
  '--theme-topbar-layout-body-background-color': '#0b1926',

  '--theme-transactions-list-background-color': '#263345',
  '--theme-transactions-list-border-color': '#263345',
  '--theme-transactions-list-group-date-color': '#7a8691',
  '--theme-transactions-list-item-details-color': '#e9f4fe',
  '--theme-transactions-card-background-color': '#e6ebf2',
  '--theme-transactions-card-income-background-color': '#e6ebf2',
  '--theme-transactions-card-expend-background-color': '#f2e6e6',
  '--theme-transactions-card-exchange-background-color': '#f2e6e6',
  '--theme-transactions-state-failed-background-color': 'rgba(189, 197, 206, 0.4)',
  '--theme-transactions-state-failed-text-color': 'rgba(233, 244, 254, 0.4)',
  '--theme-transactions-state-pending-background-color': 'rgba(189, 197, 206, 0.4)',
  '--theme-transactions-state-pending-stripes-color': 'rgba(78, 98, 128, 0.5)',
  '--theme-transactions-priority-color': 'rgba(250, 251, 252, 0.8)',
  '--theme-transactions-priority-low-background-color': '#542A2B',
  '--theme-transactions-priority-medium-background-color': '#706233',
  '--theme-transactions-priority-heigh-background-color': '#274C2D',
  '--theme-transactions-search-background-color': '#fafbfc',
  '--theme-transactions-icon-type-expend-background-color': '#4f5f7a',
  '--theme-transactions-icon-type-income-background-color': '#3b6956',
  '--theme-transactions-icon-type-exchange-background-color': '#10aca4',
  '--theme-transactions-icon-type-failed-background-color': 'rgba(234, 76, 91, 0.5)',
  '--theme-transactions-arrow-stroke-color': '#e9f4fe',

  '--theme-uploader-text-color': '#e9f4fe',
  '--theme-uploader-border-color': 'rgba(102, 122, 138, 0.3)',

  '--theme-icon-nav-color': '#9ba6b3',
  '--theme-icon-nav-color-active': '#e9f4fe',
  '--theme-icon-sidebar-color': '#fafbfc',
  '--theme-icon-toggle-menu-color': '#fafbfc',
  '--theme-icon-node-update-notification-arrow-color': '#e9f4fe',
  '--theme-icon-add-wallet-from-sidebar-color': '#fafbfc',
  '--theme-icon-ada-redemption-attention-color': '#fafbfc',
  '--theme-icon-ada-redemption-success-color': '#fafbfc',
  '--theme-icon-ada-redemption-certificate-color': '#9eabbb',
  '--theme-icon-ada-redemption-no-wallets': '#e9f4fe',
  '--theme-icon-ada-summary-wallet-amount-symbol-color': '#e9f4fe',
  '--theme-icon-ada-summary-wallet-pending-confirmation-symbol-color': '#e9f4fe',
  '--theme-icon-add-wallet-dialog-big-button-color': 'rgba(233, 244, 254, 0.8)',
  '--theme-icon-copy-address-color': '#8793a1',
  '--theme-icon-back-button-color': '#e9f4fe',
  '--theme-icon-close-button-color': '#e9f4fe',
  '--theme-icon-file-upload-color': '#8793a1',
  '--theme-icon-transactions-ada-symbol-color': '#e9f4fe',
  '--theme-icon-syncing-logo-color': '#e9f4fe',
  '--theme-icon-connecting-logo-color': '#fafbfc',
  '--theme-icon-transaction-type-color': '#fafbfc',

  '--theme-about-window-background-color': '#263345',
  '--theme-about-window-header-bottom-border-color': 'rgba(233, 244, 254, 0.3)',
  '--theme-about-window-daedalus-icon-color': '#e9f4fe',
  '--theme-about-window-cardano-icon-color': '#e9f4fe',
  '--theme-about-window-title-varsion-color': '#e9f4fe',
  '--theme-about-window-title-stroke-color': '#e9f4fe',
  '--theme-about-window-content-text-color': '#e9f4fe',
  '--theme-about-window-content-bottom-border-color': 'rgba(233, 244, 254, 0.3)',
  '--theme-about-window-copyright-color': '#e9f4fe',

  '--theme-backup-mnemonic-background-color': 'rgba(233, 244, 254, 0.05)',

  '--theme-block-generation-info-color': '#5e6066',

  '--theme-report-issue-button-background-color': '#536370',
  '--theme-report-issue-button-background-color-hover': '#667a8a',
  '--theme-report-issue-button-background-color-active': '#495863',
  '--theme-report-issue-connecting-background-color': 'rgba(250, 251, 252, 0.05)',
  '--theme-report-issue-connecting-text-color': '#e9f4fe',
  '--theme-report-issue-syncing-background-color': 'rgba(250, 251, 252, 0.05)',
  '--theme-report-issue-syncing-text-color': '#e9f4fe',

  '--theme-connecting-background-color': '#263345',
  '--theme-connecting-text-color': '#fff',

  '--theme-syncing-background-color': '#0b1926',
  '--theme-syncing-text-color': '#e9f4fe',

  '--theme-color-error': '#ea4c5b',

  '--theme-instructions-text-color': '#e9f4fe',

  '--theme-label-button-color': 'rgba(233, 244, 254, 0.5)',

  '--theme-loading-background-color': '#0b1926',

  '--theme-mnemonic-background-color': 'rgba(83, 99, 112, 0.3)',
  '--theme-mnemonic-background-color-hover': 'rgba(102, 122, 138, 0.3)',

  '--theme-separation-border-color': '#334152',

  '--theme-support-settings-text-color': '#e9f4fe',
  '--theme-support-settings-link-color': '#20b56b',

  '--theme-terms-of-use-text-color': '#e9f4fe',

  '--theme-data-migration-layer-background-color': '#2c4567',
  '--theme-data-migration-layer-box-shadow-color': 'rgba(0, 0, 0, 0.25)',
  '--theme-data-migration-layer-button-background-color-hover': '#fafbfc',
  '--theme-data-migration-layer-text-color': '#fafbfc',
  '--theme-data-migration-layer-text-opacity-color': 'rgba(250, 251, 252, 0.5)',

  '--theme-wallet-password-switch-label-color': '#e9f4fe',

  '--theme-password-toggler-color': '#8793a1',

  '--theme-loading-spinner-color': '#e9f4fe',

  '--theme-progress-bar-background-color': 'rgba(233, 244, 254, 0.3)',
  '--theme-progress-bar-foreground-color': 'rgba(233, 244, 254, 0.7)',
};
