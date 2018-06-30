<?php

namespace App\DataFixtures;

use App\Entity\Data;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i=0; $i < 12 ; $i++) { 
            $data = new Data();
            $data->setNom('nom'. $i);
            $data->setDonnee('donnee'. $i);
            $data->setName('data'. $i);
            $data->setData('data'. $i);
            $manager->persist($data);
        }

        $manager->flush();
    }
}