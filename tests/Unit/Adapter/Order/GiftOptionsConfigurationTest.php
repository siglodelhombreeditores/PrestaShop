<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

declare(strict_types=1);

namespace Tests\Unit\Adapter\Order;

use PrestaShop\PrestaShop\Adapter\Order\GiftOptionsConfiguration;
use PrestaShop\PrestaShop\Core\Domain\Shop\ValueObject\ShopConstraint;
use Symfony\Component\OptionsResolver\Exception\InvalidOptionsException;
use Symfony\Component\OptionsResolver\Exception\UndefinedOptionsException;
use Tests\TestCase\AbstractConfigurationTestCase;

class GiftOptionsConfigurationTest extends AbstractConfigurationTestCase
{
    private const SHOP_ID = 42;
    private const GIFT_WRAPPING_PRICE = 3.0;
    private const GIFT_WRAPPING_TAX_RULE_GROUP = 3;

    /**
     * @dataProvider provideShopConstraints
     *
     * @param ShopConstraint $shopConstraint
     */
    public function testGetConfiguration(ShopConstraint $shopConstraint): void
    {
        $giftOptionsConfiguration = new GiftOptionsConfiguration($this->mockConfiguration, $this->mockShopConfiguration, $this->mockMultistoreFeature);

        $this->mockShopConfiguration
            ->method('getShopConstraint')
            ->willReturn($shopConstraint);

        $this->mockConfiguration
            ->method('get')
            ->willReturnMap(
                [
                    ['PS_GIFT_WRAPPING', false, $shopConstraint, true],
                    ['PS_GIFT_WRAPPING_PRICE', null, $shopConstraint, self::GIFT_WRAPPING_PRICE],
                    ['PS_GIFT_WRAPPING_TAX_RULES_GROUP', null, $shopConstraint, self::GIFT_WRAPPING_TAX_RULE_GROUP],
                    ['PS_RECYCLABLE_PACK', false, $shopConstraint, true],
                ]
            );

        $result = $giftOptionsConfiguration->getConfiguration();

        $this->assertSame(
            [
                'enable_gift_wrapping' => true,
                'gift_wrapping_price' => self::GIFT_WRAPPING_PRICE,
                'gift_wrapping_tax_rules_group' => self::GIFT_WRAPPING_TAX_RULE_GROUP,
                'offer_recyclable_pack' => true,
            ],
            $result
        );
    }

    /**
     * @dataProvider provideInvalidConfiguration
     *
     * @param string $exception
     * @param array $values
     */
    public function testUpdateConfigurationWithInvalidConfiguration(string $exception, array $values): void
    {
        $giftOptionsConfiguration = new GiftOptionsConfiguration($this->mockConfiguration, $this->mockShopConfiguration, $this->mockMultistoreFeature);

        $this->expectException($exception);
        $giftOptionsConfiguration->updateConfiguration($values);
    }

    /**
     * @return array[]
     */
    public function provideInvalidConfiguration(): array
    {
        return [
            [UndefinedOptionsException::class, ['does_not_exist' => 'does_not_exist']],
            [
                InvalidOptionsException::class,
                [
                    'enable_gift_wrapping' => 'wrong_type',
                    'gift_wrapping_price' => self::GIFT_WRAPPING_PRICE,
                    'gift_wrapping_tax_rules_group' => self::GIFT_WRAPPING_TAX_RULE_GROUP,
                    'offer_recyclable_pack' => true,
                ],
            ],
            [
                InvalidOptionsException::class,
                [
                    'enable_gift_wrapping' => true,
                    'gift_wrapping_price' => 'wrong_type',
                    'gift_wrapping_tax_rules_group' => self::GIFT_WRAPPING_TAX_RULE_GROUP,
                    'offer_recyclable_pack' => true,
                ],
            ],
            [
                InvalidOptionsException::class,
                [
                    'enable_gift_wrapping' => true,
                    'gift_wrapping_price' => self::GIFT_WRAPPING_PRICE,
                    'gift_wrapping_tax_rules_group' => 'wrong_type',
                    'offer_recyclable_pack' => true,
                ],
            ],
            [
                InvalidOptionsException::class,
                [
                    'enable_gift_wrapping' => true,
                    'gift_wrapping_price' => self::GIFT_WRAPPING_PRICE,
                    'gift_wrapping_tax_rules_group' => self::GIFT_WRAPPING_TAX_RULE_GROUP,
                    'offer_recyclable_pack' => 'wrong_type',
                ],
            ],
        ];
    }

    public function testSuccessfulUpdate(): void
    {
        $giftOptionsConfiguration = new GiftOptionsConfiguration($this->mockConfiguration, $this->mockShopConfiguration, $this->mockMultistoreFeature);

        $res = $giftOptionsConfiguration->updateConfiguration([
            'enable_gift_wrapping' => true,
            'gift_wrapping_price' => self::GIFT_WRAPPING_PRICE,
            'gift_wrapping_tax_rules_group' => self::GIFT_WRAPPING_TAX_RULE_GROUP,
            'offer_recyclable_pack' => true,
        ]);

        $this->assertSame([], $res);
    }

    /**
     * @return array[]
     */
    public function provideShopConstraints(): array
    {
        return [
            [ShopConstraint::shop(self::SHOP_ID)],
            [ShopConstraint::shopGroup(self::SHOP_ID)],
            [ShopConstraint::allShops()],
        ];
    }
}
