# VaxVan Design System

**Design System 100% React Native** - Componentes y tokens compartidos para las apps de VaxVan (admin y self-service).

> ✅ **Confirmación**: Este design system es **React Native puro**, NO usa Storybook ni componentes web nativos.

## Instalación

Ya está configurado en los proyectos. Solo ejecuta:

```bash
cd vaxvan.client.admin
npm install

cd ../vaxvan.client.selfservice  
npm install
```

## Uso

```tsx
import { Button, Text, colors, spacing } from "vaxvan.design-system";

function MyComponent() {
  return (
    <View style={{ padding: spacing.base }}>
      <Text variant="h2" color="primary">Título</Text>
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}
```

## Componentes

### Button

```tsx
<Button title="Primary" />
<Button title="Secondary" variant="secondary" />
<Button title="Ghost" variant="ghost" />
<Button title="Danger" variant="danger" />
<Button title="Loading" loading />
<Button title="Disabled" disabled />
<Button title="Full Width" fullWidth />
```

**Variantes:** `primary` | `secondary` | `ghost` | `danger` | `success`
**Tamaños:** `sm` | `md` | `lg`

### Text

```tsx
<Text variant="h1">Heading 1</Text>
<Text variant="body">Body text</Text>
<Text variant="caption" muted>Caption</Text>
<Text color="primary">Colored text</Text>
```

**Variantes:** `h1` | `h2` | `h3` | `h4` | `h5` | `bodyLarge` | `body` | `bodySmall` | `label` | `caption`
**Colores:** `default` | `muted` | `inverse` | `primary` | `secondary` | `danger` | `success` | `warning`

## Tokens

```tsx
import { colors, spacing, fontSizes, borderRadius, shadows } from "vaxvan.design-system";

colors.primary      // #F28C00
colors.secondary    // #2D7CF6
spacing.base        // 16
borderRadius.md     // 8
```

## Tecnología

- ✅ **100% React Native** - Usa `TouchableOpacity`, `View`, `Text`, `StyleSheet` de React Native
- ✅ **Compatible con Expo** - Funciona en iOS, Android y Web (via React Native Web)
- ✅ **Sin Storybook** - No requiere Storybook ni herramientas adicionales
- ✅ **TypeScript** - Completamente tipado

## Estructura

```
vaxvan.design-system/
├── src/
│   ├── index.ts
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── borders.ts
│   └── components/
│       ├── Button/        # TouchableOpacity de React Native
│       └── Text/          # Text de React Native
├── package.json
└── tsconfig.json
```

